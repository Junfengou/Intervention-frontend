<template>
    <div class="wrapper">
        <h3>Log in form</h3>
        <!-- Attach submit logic on this line of template -->
            <!-- <b-form class="formWrapper"  @submit="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
                description="So I can sell it to the blackmarket"
            >

            <b-form-input
                id="input-1"
                v-model="email"
                type="email"
                placeholder="Gimmie your email you bum!"
                required
            />
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Password:"
                label-for="input-2"
                description="Come on....Tell me 😉"
            >

            <b-form-input
                id="input-2"
                v-model="password"
                type="password"
                placeholder="I was kidding earlier! 😝"
                required
            />
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <NuxtLink to="/"><b-button>Home</b-button></NuxtLink>
            <NuxtLink to="/testform"><b-button type="button" >Test form</b-button></NuxtLink>
        </b-form> -->

        <FormulateForm v-model="formValues">
            <FormulateInput
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                validation="required"
            />

            <!-- <FormulateInput
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                validation="^required|min:4,length|matches:/[0-9]/"
            /> -->

            <FormulateInput
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                validation="required"
            />

            <FormulateInput
                type="submit"
                label="Login"
                @click="onSubmit"
            >
            </FormulateInput>
        </FormulateForm>
        <NuxtLink to="/"><b-button type="button" >Home</b-button></NuxtLink>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                // email: "",
                // password: ""
                formValues: {}
            }
        },
        methods: {
            // make sure to accept the cookie that the backend send through
            // Bearer token
            async onSubmit(e) {
                e.preventDefault();
                await fetch("http://localhost:7000/users/login", 
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: this.formValues?.email,
                        password: this.formValues?.password
                    })
                });

                await this.$router.push('/')
            },

            onReset() {
                this.email = ''
                this.password = ''
            },
            log() {
                console.log(this.formValues.email);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 50vh;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        /* border: solid red; */
    }

    .formWrapper {

        width: 50vh;
        padding: 1rem;
    }
</style>