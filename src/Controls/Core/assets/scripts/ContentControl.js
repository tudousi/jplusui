/**

    /**
	 * 获取或设置当前输入域的状态。
	 * @protected
	 */
	state: function (name, value) {
	    return this.toggleClass('x-' + this.xtype + '-' + name, value);
	}