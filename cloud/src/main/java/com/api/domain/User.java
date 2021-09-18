package com.api.domain;

import java.sql.Timestamp;

public class User {
	
	private long id;
	private String login_id;
	private String name;
    private String password;
	private String email;
    private long group_id;
    private Timestamp created_at;
    private Timestamp deleted_at;
    private boolean is_deleted;
	
	public boolean getIsDeleted() {
		return is_deleted;
	}
	public void setIsDeleted(Boolean is_deleted) {
		this.is_deleted = is_deleted;
	}

	public Timestamp getdeletedAt() {
		return deleted_at;
	}
	public void setDeletedAt(Timestamp deleted_at) {
		this.deleted_at = deleted_at;
	}

	public Timestamp getCreatedAt() {
		return created_at;
	}
	public void setCreatedAt(Timestamp created_at) {
		this.created_at = created_at;
	}

	public String getLoginId() {
		return login_id;
	}
	public void setLoginId(String login_id){
		this.login_id = login_id;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password){
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getGroupId() {
		return group_id;
	}
	public void setGroupId(long groupId) {
		this.group_id = group_id;
	}
	
}