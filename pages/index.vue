<template>
      <v-flex xs5 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;padding: 10px" class="text-xs-center">
          <v-card flat style="padding: 10px">
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
            <v-text-field name="Username" label="Username" v-model="username"></v-text-field>
            <v-text-field name="Password" label="Password" type="password" v-model="password"></v-text-field>
            <v-card-actions>
              <v-btn @click="userLogin()" primary large block>
                Login
              </v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
</template>

<script>
import axios from 'axios'

export default {
	data: () => ({
		username: '',
		password: '',
		isAuth: false,
	}),
	methods: {
		checkAuth(req, res, next) {
			if (!req.session.user_id) {
				res.send('You are not authorized to view this page');
			} else {
				next();
			}
		},
		userLogin() {
			if (this.username && this.password)
				axios.get('http://localhost:3001')
					.then(response => {
						console.log(response.data);
						if (response.data.username === this.username && response.data.password === this.password) {
							this.isAuth = true
							this.$router.push('/inspire')
						} else {
							console.log('Incorrect login/password');
						}
					})
					.catch((error) => {
						console.log(error);
					});
		}
	}
}
</script>
