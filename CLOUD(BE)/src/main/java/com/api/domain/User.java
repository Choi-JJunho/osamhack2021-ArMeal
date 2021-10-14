package com.api.domain;

import java.sql.Timestamp;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

public class User {

	@ApiModelProperty(hidden = true)
	private long id;

	@ApiModelProperty(notes = "아이디", example = "abcd")
	private String login_id;

	@ApiModelProperty(notes = "비밀번호", example = "12345")
    private String password;

	@ApiModelProperty(notes = "이름(닉네임)", example = "tester")
	private String name;

	@ApiModelProperty(notes = "이메일", example = "test@naver.com")
	private String email;

	@ApiModelProperty(notes = "해당 부대", example = "1")
    private long group_id;

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

	public String getLogin_id() {
		return this.login_id;
	}

	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getGroup_id() {
		return this.group_id;
	}

	public void setGroup_id(long group_id) {
		this.group_id = group_id;
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
			", login_id='" + getLogin_id() + "'" +
			", password='" + getPassword() + "'" +
			", name='" + getName() + "'" +
			", email='" + getEmail() + "'" +
			", group_id='" + getGroup_id() + "'" +
			", created_at='" + getCreated_at() + "'" +
			", deleted_at='" + getDeleted_at() + "'" +
			", is_deleted='" + isIs_deleted() + "'" +
			"}";
	}
	
	
}