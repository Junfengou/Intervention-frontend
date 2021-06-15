<template>
    <div class="wrapper">
            <div class="container">

            <FormulateForm v-model="formValues">
                <FormulateInput
                    name="studyName"
                    type="text"
                    label="Study name"
                    placeholder="Study name"
                    validation="required"
                />

                <FormulateInput
                    name="studyID"
                    type="text"
                    label="Study ID"
                    placeholder="Study ID"
                    validation="required"
                />

                <FormulateInput
                    type="select"
                    name="goalType"
                    :options="{first: 'Pick one...', second: 'Time', third: 'Count/Number'}"
                    placeholder="Select an option"
                    label="Select one"
                />

                <FormulateInput
                type="submit"
                label="Signup"
                @click="onSubmit"
            />
            
            
                
                <div class="calendars">
                    
                    <div class="startCalendar">
                        <h3>Start date</h3>
                        <vc-date-picker
                        :value="null"
                        color="indigo"
                        is-dark
                        v-model="startDate"
                        />
                    </div>

                
                    <div class="endCalendar">
                        <h3>End date</h3>
                        <vc-date-picker
                        :value="null"
                        color="indigo"
                        is-dark
                        v-model="endDate"
                        dayPopover="true"
                        />
                    </div>
                </div>
            </FormulateForm>
            </div>
            <div class="btns">
                <b-button type="submit" variant="primary">Submit</b-button>
                <NuxtLink to="/"><b-button type="button" >Home</b-button></NuxtLink>
            </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formValues: {},
                startDate: new Date(),
                endDate: new Date(),
                // goalSelect: [{ text: 'Pick one...', value: null }, 'Time', 'Count/Number'],
            }
        },

        methods: {
            onSubmit(e) {
                e.preventDefault();
                console.log("study name: ",  this.formValues?.studyName);
                console.log("study ID: ",  this.formValues?.studyID);
                console.log("Goal type: ",  this.formValues?.goalType);
                console.log("date start: ",  this.startDate);
                console.log("date end: ",  this.endDate);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

    }

    .formWrapper {
        /* border: solid gold; */
        height: 80vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }

    .container {
        /* border: solid red; */
        width: 50%;
    }

    .calendars {
        /* border: solid var(--orange); */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .btns {
        display: flex;
        gap: 2rem;
    }
</style>