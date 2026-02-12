const user = {
    username : 'john_doe',
    email : 'dsf@example.com',
    login : true,   
    getuserDetails : function() {
        console.log(`username ${this.username}, email ${this.email}, login status ${this.login}`);
      }

}

console.log(user);

user.getuserDetails();