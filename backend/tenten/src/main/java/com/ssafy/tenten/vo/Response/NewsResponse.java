package com.ssafy.tenten.vo.Response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;


@Getter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class NewsResponse {
    private final Long newsId;
    private final String title;
    private final String content;
    private final String company;
    private final LocalDateTime date;
}
