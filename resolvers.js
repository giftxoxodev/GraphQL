
const users = [
	{
		user_id:1,
		first_name:'Srinivasa',
		last_name:'Sainath',
		designation:'Software Engineer',
		pic:'https://vpms.xoxoday.com/images/xoxoday.png'
	},
	{
		user_id:2,
		first_name:'Ankit',
		last_name:'Bindal',
		designation:'AVP-Tech',
		pic:'https://vpms.xoxoday.com/images/xoxoday.png'
	},
	{
		user_id:3,
		first_name:'Abhinava',
		last_name:'Dinesh',
		designation:'AVP-Tech',
		pic:'https://vpms.xoxoday.com/images/xoxoday.png'
	},
	{
		user_id:4,
		first_name:'Anindo',
		last_name:'Bandyopadhyay',
		designation:'VP-Tech',
		pic:'https://vpms.xoxoday.com/images/xoxoday.png'
	},
	{
		user_id:5,
		first_name:'Anurag',
		last_name:'Kumar',
		designation:'Team Lead',
		pic:'https://vpms.xoxoday.com/images/xoxoday.png'
	},
	{
		user_id:6,
		first_name:'Kuldeep',
		last_name:'Jaiswal',
		designation:'Team Lead - Mobile',
		pic:'https://vpms.xoxoday.com/images/xoxoday.png'
	}
]


const resolvers = {
	Query:{
		getUsers:(obj,args,context,info) => {
			return users
		},
		getUser:(obj,{user_id},context,info) => {
			return users.find(user => user.user_id == user_id)
		}
	},
	Mutation:{
		addUser:(obj,{first_name,last_name,pic},context,info) => {
			users.push({
				first_name:first_name,
				last_name:last_name,
				pic:pic,
				user_id:users[users.length-1].user_id+1
			})
			return true
		},
		deleteUser:(obj,{user_id},context,info) => {
			for (var i = 0; i < users.length; i++) {
				if(users[i].user_id == user_id){
					users.splice(i,1)
					return true
				}
			}

			return false
		}
	},
	User:{
		full_name:(prev_obj,args,context,info) => {
			return `${prev_obj.first_name} ${prev_obj.last_name}`
		}
	}
}

module.exports = resolvers