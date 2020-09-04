<template>
    <v-container>
            <v-row>
                <v-col md="4" offset-md="4" sm="8" offset-sm="2">
                <v-card>
                    <v-card-title class="justify-center">
                        <h2> Sign Up </h2>
                    </v-card-title>
                    <v-card-text>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <v-form @submit.prevent="handleSubmit(registerUser)" name="registerForm">
                                    <ValidationProvider rules="required|alpha_spaces" v-slot="{ errors }" name="Name">
                                    <v-text-field 
                                        label="Name" 
                                        prepend-icon="fa-user" 
                                        type="text"
                                        color="#3C8CE7"
                                        v-model="name"
                                        name="name"

                                    />
                                    <span> {{ errors[0] }}</span>

                                </ValidationProvider>
                                
                                <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">

                                    <v-text-field 
                                        label="Email" 
                                        prepend-icon="fa-envelope" 
                                        type="text"
                                        color="#3C8CE7"
                                        class="mt-4"
                                        v-model="email"
                                    />
                                    <span> {{ errors[0] }}</span>
                                
                                </ValidationProvider>

                                <ValidationProvider rules="required|min:4|max:12" v-slot="{ errors }" name="pass">
                                    <v-text-field 
                                        label="Password" 
                                        prepend-icon="fa-lock" 
                                        type="text"
                                        color="#3C8CE7"
                                        class="mt-4"
                                        v-model="pass"
                                    />
                                    <span> {{ errors[0] }}</span>
                                </ValidationProvider>

                                <ValidationProvider rules="required|confirmed:pass" v-slot="{ errors }" name="password">
                                    <v-text-field 
                                        label="Confirm Password" 
                                        prepend-icon="fa-lock" 
                                        type="text"
                                        color="#3C8CE7"
                                        class="mt-4"
                                        v-model="password"
                                    />
                                    <span> {{ errors[0] }}</span>
                                </ValidationProvider>
            
                                <ValidationProvider rules="required" v-slot="{ errors }" name="country">
                                    <v-text-field
                                        label="Country"
                                        auto-grow
                                        color="#3C8CE7"
                                        prepend-icon="fa-map-marker-alt"
                                        class="mt-4"
                                        v-model="country"
                                    />
                                    <span> {{ errors[0] }}</span>
                                </ValidationProvider>

                                <div class="text-center mt-3">
                                    <v-btn color="#E15855" type="submit" class="px-10" outlined  ripple>
                                        Sign Up
                                    </v-btn>
                                </div>
                            </v-form>
                        </ValidationObserver>
                    </v-card-text>
                </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    
    data() {
        return {
            email: '',
            pass: '',
            password:'',
            name: '',
            country: ''
        }
    },
    methods: {

         ...mapActions({
            signup: 'authModule/register'
        }),

        registerUser() {
            // var form = document.getElementById('registerForm');

            const formdata = new FormData();
            formdata.append('name', this.name);
            formdata.append('pass', this.pass);
            formdata.append('pass2', this.password);
            formdata.append('country', this.country);
            formdata.append('email', this.email);
            this.signup(formdata)
            .then(response => {
                this.$router.push({name: 'Home'});
                console.log(response);
                alert("Registration Successfull");
            })
            .catch((err) => {
                console.log(err);
            })
            }
    }
}
</script>

<style scoped>
span {
    margin-left: 30px;
}
</style>