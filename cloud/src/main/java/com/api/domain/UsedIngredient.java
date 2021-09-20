package com.api.domain;

import io.swagger.annotations.ApiModelProperty;

public class UsedIngredient {

	@ApiModelProperty(hidden = true)
	private long Menu_id;
	
	@ApiModelProperty(hidden = true)
	private long ingredient_data_id;


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

	@Override
	public String toString() {
		return "{" +
			" Menu_id='" + getMenu_id() + "'" +
			", ingredient_data_id='" + getIngredient_data_id() + "'" +
			"}";
	}
	
}
