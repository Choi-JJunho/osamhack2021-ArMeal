package com.api.domain;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import io.swagger.annotations.ApiModelProperty;

public class DailyMeal {
	@ApiModelProperty(notes = "날짜", example = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
    private Date date;
    // 1. 조식 2. 중식 3. 석식
	@ApiModelProperty(notes = "1: 조식\n2: 중식\n3: 석식", example = "1")
	private int time;
	@ApiModelProperty(notes = "부대 아이디", example = "1")
	private Long group_id;
	@ApiModelProperty(notes = "메뉴 아이디", example = "2")
	private int menu;
    

	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getTime() {
		return this.time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public Long getGroup_id() {
		return this.group_id;
	}

	public void setGroup_id(Long group_id) {
		this.group_id = group_id;
	}

	public int getMenu() {
		return this.menu;
	}

	public void setMenu(int menu) {
		this.menu = menu;
	}

	@Override
	public String toString() {
		return "{" +
			" date='" + getDate() + "'" +
			", time='" + getTime() + "'" +
			", group_id='" + getGroup_id() + "'" +
			", menu='" + getMenu() + "'" +
			"}";
	}
	
}
