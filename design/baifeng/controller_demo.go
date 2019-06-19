type QueryMyBus struct {
	common.HandlerDemo
}

func (self *QueryMyBus) FuckBody(body interface{}) (result interface{}, err error) {
	obj := *body.(*map[string]interface{})
	//创建实例

	auth := self.Env()["AUTH_INFO"].(tools.UserAuth)
	authid := to.Int64(auth["id"])
	limit := to.Int64(obj["limit"])
	offset := to.Int64(obj["offset"])

	r := make([]*model.BusModel, 0, limit)
	var off int64
	if off, r, err = self.query(authid, offset, limit); err != nil {
		self.Debug("\n异常")
		return nil, err
	}

	return common.Result{
		Status: "200",
		Data: common.List{
			Offset: off,
			List:   r,
		},
		Msg: "成功",
	}, nil
}
func (self *QueryMyBus) query(authid int64, offset int64, limit int64) (off int64, rr []*model.BusModel, err error) {

	rr = make([]*model.BusModel, 0, limit)
	o := common.NewOrm()
	uoo, _ := common.NewOrm().QueryTable("bus_model").Filter("owner_id", authid).Count()
	if uoo > 0 {
		if off, err = o.QueryTable("bus_model").Filter("owner_id", authid).OrderBy("-useway").Offset(offset).Limit(limit).All(&rr); err != nil {
			return 0, nil, err
		}
	}
	if off < limit {
		off = -1
	}
	for _, v := range rr {
		if er := common.NewOrm().QueryTable("activity_bus").Filter("id", v.Bus.Id).One(v.Bus); er != nil {
			return 0, nil, er
		}
	}
	//计算座驾剩余时间(newtime-resttime 是否大于等于 gettime ,是：return 差->秒，否，return -1（过期） )
	for _, v := range rr {
		//时间相关的计算
		//if v.Useway == 1 { //使用座驾的时候的计算房改时
		if v.Getway != 3 {
			v.Resttime = v.Resttime - (time.Now().Unix() - v.Gettime)
		}

		if v.Resttime < 0 && v.Resttime != -2 {
			v.Resttime = -1
			//既然过期了,那就改为不使用，把剩余时间改成－１
			if _, ert := common.NewOrm().QueryTable("bus_model").Filter("owner_id", v.Owner.Id).Filter("bus_id", v.Bus.Id).Filter("useway", 1).Update(orm.Params{
				"useway":   0,
				"resttime": -1,
			}); ert != nil {
				return 0, nil, ert
			}
		}

		//}
		//如果是榜单送的车那么显示－２
		if v.Getway > 1 {
			v.Resttime = -2
		}

		fmt.Println("显示的剩余 时间 ：", v.Resttime)
	}
	return off, rr, nil
}
func (self *QueryMyBus) CheckBody(body interface{}) error {
	obj := *body.(*map[string]interface{})
	if err := common.HasValues(obj, "offset", "limit"); err != nil {
		return err
	}
	offset := to.Int64(obj["offset"])
	limit := to.Int64(obj["limit"])
	if offset < 0 {
		return errors.New("offset值非法")
	}
	if limit < 1 || limit > 20 {
		return errors.New("limit值非法")
	}
	return nil
}
