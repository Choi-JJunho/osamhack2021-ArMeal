package com.api.domain;

import java.sql.Timestamp;

import io.swagger.annotations.ApiModelProperty;

public class Rating {

	public Rating() {}
	
	public Rating(long userId, long groupId, long menuId, int rating, int badReason) {
		this.Menu_id = menuId;
		this.User_id = userId;
		this.group_id = groupId;
		this.rating_data = rating;
		this.bad_reason = badReason;
	}

	@ApiModelProperty(hidden = true)
    private long id;

	@ApiModelProperty(notes = "급양대 부대번호", example = "5322")
    private long group_id;
	
	@ApiModelProperty(notes = "유저 아이디", example = "1")
	private long User_id;

	@ApiModelProperty(notes = "메뉴 아이디", example = "1")
	private long Menu_id;

	@ApiModelProperty(notes = "평가 값\n5 : 좋음\n4 : 좋음\n3 : 보통\n2 : 나쁨\n1 : 아주 나쁨", example = "1")
    private int rating_data;

	@ApiModelProperty(notes = "매우나쁨 이유 \n1: 짜다, 2: 쓰다, 3: 맵다, 4: 달다, 5: 시다, 6: 싱겁다, 7: 식었다, 8: 양이적다", example = "1")
	private int bad_reason;

	@ApiModelProperty(hidden = true)
    private Timestamp created_at;

	@ApiModelProperty(hidden = true)
    private Timestamp deleted_at;

	@ApiModelProperty(hidden = true)
    private boolean is_deleted;


	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getGroup_id() {
		return this.group_id;
	}

	public void setGroup_id(long group_id) {
		this.group_id = group_id;
	}

	public int getBad_reason() {
		return this.bad_reason;
	}

	public void setBad_reason(int bad_reason) {
		this.bad_reason = bad_reason;
	}

	public long getUser_id() {
		return this.User_id;
	}

	public void setUser_id(long User_id) {
		this.User_id = User_id;
	}

	public long getMenu_id() {
		return this.Menu_id;
	}

	public void setMenu_id(long Menu_id) {
		this.Menu_id = Menu_id;
	}

	public int getRating_data() {
		return this.rating_data;
	}

	public void setRating_data(int rating_data) {
		this.rating_data = rating_data;
	}

	public Timestamp getCreated_at() {
		return this.created_at;
	}

	public void setCreated_at(Timestamp created_at) {
		this.created_at = created_at;
	}

	public Timestamp getDeleted_at() {
		return this.deleted_at;
	}

	public void setDeleted_at(Timestamp deleted_at) {
		this.deleted_at = deleted_at;
	}

	public boolean isIs_deleted() {
		return this.is_deleted;
	}

	public boolean getIs_deleted() {
		return this.is_deleted;
	}

	public void setIs_deleted(boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	@Override
	public String toString() {
		return "{" +
			" id='" + getId() + "'" +
			", User_id='" + getUser_id() + "'" +
			", Menu_id='" + getMenu_id() + "'" +
			", rating_data='" + getRating_data() + "'" +
			", bad_reason='" + getBad_reason() + "'" +
			", created_at='" + getCreated_at() + "'" +
			", deleted_at='" + getDeleted_at() + "'" +
			", is_deleted='" + isIs_deleted() + "'" +
			"}";
	}
	
	
}
