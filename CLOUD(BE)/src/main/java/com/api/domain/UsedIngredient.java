package com.api.domain;

import io.swagger.annotations.ApiModelProperty;

public class UsedIngredient {
	
	@ApiModelProperty(hidden = true)
	private long id;

	@ApiModelProperty(hidden = true)
	private long Menu_id;
	
	@ApiModelProperty(hidden = true)
	private long ingredient_data_id;

	@ApiModelProperty(hidden = true)
	private long Self_id;

	public long getMenu_id() {
		return this.Menu_id;
	}

	public void setMenu_id(long Menu_id) {
		this.Menu_id = Menu_id;
	}

	public long getIngredient_data_id() {
		return this.ingredient_data_id;
	}

	public void setIngredient_data_id(long ingredient_data_id) {
		this.ingredient_data_id = ingredient_data_id;
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getSelf_id() {
		return this.Self_id;
	}

	public void setSelf_id(long Self_id) {
		this.Self_id = Self_id;
	}

	
	@Override
	public String toString() {
		return "{" +
			" id='" + getId() + "'" +
			", Menu_id='" + getMenu_id() + "'" +
			", ingredient_data_id='" + getIngredient_data_id() + "'" +
			", Self_id='" + getSelf_id() + "'" +
			"}";
	}
	
}
