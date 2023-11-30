<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import dummyData from '../assets/dummy.json'

const focusedPosition = ref(null)
const list1 = ref([])
const list2 = ref([])

const postDisplayName = ref('')
const postEmail = ref('')
const postPhone = ref(0)
const postMessage = ref('')

const focusedPositionDesc = ref({
  txt: '<h5><strong>Job Description :</strong></h5><ul><li>Monitor competition to identify new industry trends and opportunities for innovation</li><li>Develop marketing strategies based on customer preferences, business objectives, and available resources</li><li>Conduct market research to identify potential customers and assess their needs, interests, and preferences</li><li>Work with design teams to develop marketing materials such as brochures, ads, and presentations</li><li>Create an advertising budget that reflects the company’s priorities while remaining within the parameters set by upper management</li><li>Develop an effective communications strategy for each campaign using several different channels, including social media, email, push notification, print ads</li><li>Create a detailed timeline of all marketing activities, including production schedules, deadlines for materials delivery, and event dates and locations</li><li>Provide feedback to superiors regarding the effectiveness of new campaigns and recommend adjustments</li></ul><h5><strong>Skill :</strong></h5><ul><li>Minimum bachelor degree in Marketing Management;</li><li>Minimum 3-5 years experience as Marketing Manager/Director in any marketplace industry;</li><li>Good time management and project management skill;</li><li>Creative communication skill in both verbal and design</li><li>Multi-language abilities in verbal and non-verbal</li></ul>'
})

focusedPosition.value = dummyData[0]

for (let i = 0; i < dummyData.length; i++) {
  if (i % 2 == 0) {
    list1.value.push(dummyData[i])
  } else {
    list2.value.push(dummyData[i])
  }
}

// TODO uncomment when we can get through the CORS
//axios
//  .get('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth')
//  .then(function (response) {
//    console.log(response)
//  })
//  .catch(function (error) {
//    console.log(error)
//  })

function selectJob(value) {
  focusedPosition.value = value
  focusedPositionDesc.value.txt = value.description.txt
}

function submitData() {
  console.log(postDisplayName.value)
  //axios
  //  .post('https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth', {
  //    displayName: postDisplayName.value,
  //    subject: focusedPosition.value.title,
  //    email: postEmail.value,
  //    phone: postPhone.value,
  //    message: postMessage.value,
  //    ptJobApplyType: 'APPLICATION',
  //    isActive: false,
  //    ptJobPost: { id: 1 }
  //  })
  //  .then(function (response) {
  //    console.log(response)
  //  })
  //  .catch(function (error) {
  //    console.log(error)
  //  })
  console.log('uploaded')
}

const onNameChange = (event) => {
  postDisplayName.value = event.target.value
}

const onEmailChange = (event) => {
  postEmail.value = event.target.value
}

const onPhoneChange = (event) => {
  postPhone.value = event.target.value
}

const onMessageChange = (event) => {
  postMessage.value = event.target.value
}
</script>

<template>
  <div class="api-test h-screen">
    <div class="w-full h-1/5 flex justify-evenly">
      <ul class="w-2/5">
        <li
          class="w-full h-12 bg-yellow-200 m-2 pt-2 pl-4 rounded flex justify-between"
          v-for="value in list1"
        >
          <div class="w-1/2">
            <p>{{ value.title }}</p>
          </div>
          <button @click="selectJob(value)" class="w-1/5 h-4/5 mr-2 rounded bg-orange-500">
            See Job
          </button>
        </li>
      </ul>
      <ul class="w-2/5">
        <li
          class="w-full h-12 bg-yellow-200 m-2 pt-2 pl-4 rounded flex justify-between"
          v-for="value in list2"
        >
          <div class="w-1/2">
            <p>{{ value.title }}</p>
          </div>
          <button @click="selectJob(value)" class="w-1/5 h-4/5 mr-2 rounded bg-orange-500">
            See Job
          </button>
        </li>
      </ul>
    </div>
    <div class="w-full h-max p-4">
      <div class="w-full h-full bg-yellow-200">
        <div class="text-2xl text-lime-500 font-bold pl-4 pt-4">
          <p>{{ focusedPosition.title }}</p>
        </div>
        <div class="px-4">
          <div v-html="focusedPositionDesc.txt"></div>
        </div>
        <div class="mt-8 px-8 text-lg font-bold">
          <div class="my-4">
            <p>Send Your Job Application:</p>
          </div>
          <div class="w-full flex justify-between">
            <div class="w-full">
              <label for="name">Your name:</label><br />
              <input
                @input="onNameChange"
                type="text"
                id="name"
                name="name"
                class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="Name"
              /><br />
              <label for="email">Email Address</label><br />
              <input
                @input="onEmailChange"
                type="email"
                id="email"
                name="email"
                class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="E-mail"
              /><br />
            </div>
            <div class="w-full">
              <label for="phoneNumber">Mobile Number</label><br />
              <input
                @input="onPhoneChange"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="+62-"
              /><br />
              <label for="message">Write Your Message Here</label><br />
              <input
                @input="onMessageChange"
                type="text"
                id="message"
                name="message"
                class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="Pizza is delicious"
              /><br />
            </div>
          </div>
          <div>
            <label for="files">File</label><br />
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </div>
          <div class="my-8">
            <button class="w-24 h-16 bg-sky-400 rounded" @click="submitData">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
