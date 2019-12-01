import {observable, action} from 'mobx';

class AuthStore{
	@observable username = "mustafa";
}

export default new AuthStore();