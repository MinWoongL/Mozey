import requests
import datetime
import mysql.connector

current_date = datetime.date.today().strftime('%Y-%m-%d')
yesterday = datetime.date.today() - datetime.timedelta(days=1)
yesterday_date = yesterday.strftime('%Y-%m-%d')

conn = mysql.connector.connect(
    host='j9a510.p.ssafy.io',
    user='root',
    password='3jbhrVyqstWs9ud',
    database='test'
)
cursor = conn.cursor()

# 오늘 날짜 quiz 조회
quiz_query = "SELECT * FROM quiz WHERE date = %s"
cursor.execute(quiz_query, (current_date,))
quiz_data = cursor.fetchall()

# 오늘 날짜에 해당하는 quiz가 5개 이하일 때만 만들기
if len(quiz_data) <= 5:
    news_query = "SELECT news_id, content FROM news WHERE date = %s LIMIT 1"
    cursor.execute(news_query, (current_date,))
    news_data = cursor.fetchone()

    # 조회된 뉴스데이터가 있을 경우 문제 생성 API로 문제만들기
    if news_data:
        news_id, news_content = news_data

        # API endpoint 설정
        url = "https://api.opexams.com/questions-generator"

        # 헤더 설정
        headers = {
            "api-key": "794ZcZGtmZnzMADT0SPu1JaeZSH4qwU",
        }

        # 요청 본문 설정
        data = {
            "type": "contextBased",
            "context": news_content,
            "questionType": "MCQ",
            "difficulty": "medium",
            "language": 'Korean'
        }

        response = requests.post(url, headers=headers, json=data)

        # 응답을 데이터베이스에 저장
        if response.status_code == 200:
            print("Quiz for today has been created successfully.")
            quiz_data_response = response.json()["data"]
            inserted_count = 0

            for q in quiz_data_response:
                try:
                    if not q['answer']:  # answer가 비어있는 경우 건너뜀
                        continue
                    insert_query = """
                    INSERT INTO quiz (question, answer, date, news_id, option1, option2, option3, option4, option5)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """
                    values = (
                        q['question'],
                        q['answer'],
                        current_date,
                        news_id,
                        q['options'][0],
                        q['options'][1],
                        q['options'][2],
                        q['options'][3],
                        q['options'][4]
                    )
                    cursor.execute(insert_query, values)
                    conn.commit()
                    inserted_count += 1
                except IndexError:
                    continue

            print(f"Inserted {inserted_count} questions into the database.")

        else:
            print(f"Error occurred: {response.text}")

    else:
        print("No news data for today.")
else:
    print("Quiz count for today exceeds 5.")

cursor.close()
conn.close()
