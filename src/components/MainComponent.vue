<template>
  <div class="hello">
    <div class="search-bar">
      <div class="select-country">
        <select id="country" v-model="location" @change="search()" name="country">
          <option value="">select country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Aland+Islands">Aland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American+Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bonaire">Bonaire</option>
          <option value="Bosnia">Bosnia</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet">Bouvet</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina">Burkina Faso</option>
          <option value="BI">Burundi</option>
          <option value="KH">Cambodia</option>
          <option value="CM">Cameroon</option>
          <option value="CA">Canada</option>
          <option value="CV">Cape Verde</option>
          <option value="KY">Cayman Islands</option>
          <option value="CF">Central African Republic</option>
          <option value="TD">Chad</option>
          <option value="CL">Chile</option>
          <option value="CN">China</option>
          <option value="CX">Christmas Island</option>
          <option value="CC">Cocos (Keeling) Islands</option>
          <option value="CO">Colombia</option>
          <option value="KM">Comoros</option>
          <option value="CG">Congo</option>
          <option value="CD">Congo, Democratic Republic of the Congo</option>
          <option value="CK">Cook Islands</option>
          <option value="CR">Costa Rica</option>
          <option value="CI">Cote D'Ivoire</option>
          <option value="HR">Croatia</option>
          <option value="CU">Cuba</option>
          <option value="CW">Curacao</option>
          <option value="CY">Cyprus</option>
          <option value="CZ">Czech Republic</option>
          <option value="DK">Denmark</option>
          <option value="DJ">Djibouti</option>
          <option value="DM">Dominica</option>
          <option value="DO">Dominican Republic</option>
          <option value="EC">Ecuador</option>
          <option value="EG">Egypt</option>
          <option value="SV">El Salvador</option>
          <option value="GQ">Equatorial Guinea</option>
          <option value="ER">Eritrea</option>
          <option value="EE">Estonia</option>
          <option value="ET">Ethiopia</option>
          <option value="FK">Falkland Islands (Malvinas)</option>
          <option value="FO">Faroe Islands</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finland</option>
          <option value="FR">France</option>
          <option value="GF">French Guiana</option>
          <option value="PF">French Polynesia</option>
          <option value="TF">French Southern Territories</option>
          <option value="GA">Gabon</option>
          <option value="GM">Gambia</option>
          <option value="GE">Georgia</option>
          <option value="DE">Germany</option>
          <option value="GH">Ghana</option>
          <option value="GI">Gibraltar</option>
          <option value="GR">Greece</option>
          <option value="GL">Greenland</option>
          <option value="GD">Grenada</option>
          <option value="GP">Guadeloupe</option>
          <option value="GU">Guam</option>
          <option value="GT">Guatemala</option>
          <option value="GG">Guernsey</option>
          <option value="GN">Guinea</option>
          <option value="GW">Guinea-Bissau</option>
          <option value="GY">Guyana</option>
          <option value="HT">Haiti</option>
          <option value="HM">Heard Island and Mcdonald Islands</option>
          <option value="VA">Holy See (Vatican City State)</option>
          <option value="HN">Honduras</option>
          <option value="HK">Hong Kong</option>
          <option value="HU">Hungary</option>
          <option value="IS">Iceland</option>
          <option value="IN">India</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran, Islamic Republic of</option>
          <option value="IQ">Iraq</option>
          <option value="IE">Ireland</option>
          <option value="IM">Isle of Man</option>
          <option value="IL">Israel</option>
          <option value="IT">Italy</option>
          <option value="JM">Jamaica</option>
          <option value="JP">Japan</option>
          <option value="JE">Jersey</option>
          <option value="JO">Jordan</option>
          <option value="KZ">Kazakhstan</option>
          <option value="KE">Kenya</option>
          <option value="KI">Kiribati</option>
          <option value="KP">Korea, Democratic People's Republic of</option>
          <option value="KR">Korea, Republic of</option>
          <option value="XK">Kosovo</option>
          <option value="KW">Kuwait</option>
          <option value="KG">Kyrgyzstan</option>
          <option value="LA">Lao People's Democratic Republic</option>
          <option value="LV">Latvia</option>
          <option value="LB">Lebanon</option>
          <option value="LS">Lesotho</option>
          <option value="LR">Liberia</option>
          <option value="LY">Libyan Arab Jamahiriya</option>
          <option value="LI">Liechtenstein</option>
          <option value="LT">Lithuania</option>
          <option value="LU">Luxembourg</option>
          <option value="MO">Macao</option>
          <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
          <option value="MG">Madagascar</option>
          <option value="MW">Malawi</option>
          <option value="MY">Malaysia</option>
          <option value="MV">Maldives</option>
          <option value="ML">Mali</option>
          <option value="MT">Malta</option>
          <option value="MH">Marshall Islands</option>
          <option value="MQ">Martinique</option>
          <option value="MR">Mauritania</option>
          <option value="MU">Mauritius</option>
          <option value="YT">Mayotte</option>
          <option value="MX">Mexico</option>
          <option value="FM">Micronesia, Federated States of</option>
          <option value="MD">Moldova, Republic of</option>
          <option value="MC">Monaco</option>
          <option value="MN">Mongolia</option>
          <option value="ME">Montenegro</option>
          <option value="MS">Montserrat</option>
          <option value="MA">Morocco</option>
          <option value="MZ">Mozambique</option>
          <option value="MM">Myanmar</option>
          <option value="NA">Namibia</option>
          <option value="NR">Nauru</option>
          <option value="NP">Nepal</option>
          <option value="NL">Netherlands</option>
          <option value="AN">Netherlands Antilles</option>
          <option value="NC">New Caledonia</option>
          <option value="NZ">New Zealand</option>
          <option value="NI">Nicaragua</option>
          <option value="NE">Niger</option>
          <option value="NG">Nigeria</option>
          <option value="NU">Niue</option>
          <option value="NF">Norfolk Island</option>
          <option value="MP">Northern Mariana Islands</option>
          <option value="NO">Norway</option>
          <option value="OM">Oman</option>
          <option value="PK">Pakistan</option>
          <option value="PW">Palau</option>
          <option value="PS">Palestinian Territory, Occupied</option>
          <option value="PA">Panama</option>
          <option value="PG">Papua New Guinea</option>
          <option value="PY">Paraguay</option>
          <option value="PE">Peru</option>
          <option value="PH">Philippines</option>
          <option value="PN">Pitcairn</option>
          <option value="PL">Poland</option>
          <option value="PT">Portugal</option>
          <option value="PR">Puerto Rico</option>
          <option value="QA">Qatar</option>
          <option value="RE">Reunion</option>
          <option value="RO">Romania</option>
          <option value="RU">Russian Federation</option>
          <option value="RW">Rwanda</option>
          <option value="BL">Saint Barthelemy</option>
          <option value="SH">Saint Helena</option>
          <option value="KN">Saint Kitts and Nevis</option>
          <option value="LC">Saint Lucia</option>
          <option value="MF">Saint Martin</option>
          <option value="PM">Saint Pierre and Miquelon</option>
          <option value="VC">Saint Vincent and the Grenadines</option>
          <option value="WS">Samoa</option>
          <option value="SM">San Marino</option>
          <option value="ST">Sao Tome and Principe</option>
          <option value="SA">Saudi Arabia</option>
          <option value="SN">Senegal</option>
          <option value="RS">Serbia</option>
          <option value="CS">Serbia and Montenegro</option>
          <option value="SC">Seychelles</option>
          <option value="SL">Sierra Leone</option>
          <option value="SG">Singapore</option>
          <option value="SX">Sint Maarten</option>
          <option value="SK">Slovakia</option>
          <option value="SI">Slovenia</option>
          <option value="SB">Solomon Islands</option>
          <option value="SO">Somalia</option>
          <option value="ZA">South Africa</option>
          <option value="GS">
            South Georgia and the South Sandwich Islands
          </option>
          <option value="SS">South Sudan</option>
          <option value="ES">Spain</option>
          <option value="LK">Sri Lanka</option>
          <option value="SD">Sudan</option>
          <option value="SR">Suriname</option>
          <option value="SJ">Svalbard and Jan Mayen</option>
          <option value="SZ">Swaziland</option>
          <option value="SE">Sweden</option>
          <option value="CH">Switzerland</option>
          <option value="SY">Syrian Arab Republic</option>
          <option value="TW">Taiwan, Province of China</option>
          <option value="TJ">Tajikistan</option>
          <option value="TZ">Tanzania, United Republic of</option>
          <option value="TH">Thailand</option>
          <option value="TL">Timor-Leste</option>
          <option value="TG">Togo</option>
          <option value="TK">Tokelau</option>
          <option value="TO">Tonga</option>
          <option value="TT">Trinidad and Tobago</option>
          <option value="TN">Tunisia</option>
          <option value="TR">Turkey</option>
          <option value="TM">Turkmenistan</option>
          <option value="TC">Turks and Caicos Islands</option>
          <option value="TV">Tuvalu</option>
          <option value="UG">Uganda</option>
          <option value="UA">Ukraine</option>
          <option value="AE">United Arab Emirates</option>
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>
          <option value="UM">United States Minor Outlying Islands</option>
          <option value="UY">Uruguay</option>
          <option value="UZ">Uzbekistan</option>
          <option value="VU">Vanuatu</option>
          <option value="VE">Venezuela</option>
          <option value="VN">Viet Nam</option>
          <option value="VG">Virgin Islands, British</option>
          <option value="VI">Virgin Islands, U.s.</option>
          <option value="WF">Wallis and Futuna</option>
          <option value="EH">Western Sahara</option>
          <option value="YE">Yemen</option>
          <option value="ZM">Zambia</option>
          <option value="ZW">Zimbabwe</option>
        </select>
      </div>
      <div v-if="location" class="username-input">
        <input type="text" v-model="username" name="username" id="" placeholder="username..." />
      </div>
      <div v-if="location" class="search-btn" @click="search">
        <p>Recherche</p>
      </div>
    </div>
    <p v-if="users" class="total">Total users : {{ total }}</p>


    <div v-if="users" class="paginate">
      <div v-if="(order == 'asc' && page != lastPageNumber) || (order == 'desc' && page != 1)" @click="firstPage">
        <p>First</p>
      </div>
      <div v-if="(order == 'asc' && page != lastPageNumber) || (order == 'desc' && page != 1)" @click="prevPage">
        <p>Prev</p>
      </div>
      <div v-if="(order == 'desc' && page != lastPageNumber) || (order == 'asc' && page != 1)" @click="nextPage">
        <p>Next</p>
      </div>
      <div v-if="(order == 'desc' && page != lastPageNumber) || (order == 'asc' && page != 1)" @click="lastPage">
        <p>Last</p>
      </div>
    </div>

    <div class="duo">
      <div class="yearList ">
        <div v-for="year in yearList" v-bind:key="year.year" @click="yearfilter(year.year)"
          :class="`${date == year.year ? 'active' : ''} `">
          <p class="yea"><strong>{{ year.year }}</strong></p>
          <p class="yearSigned">{{ year.count }} </p>
        </div>
      </div>
      <div v-if="order == 'desc'" class="user-list ">
        <div class="users" v-for="user in users" v-bind:key="user">
          <img :src="user.avatar_url" />
          <a :href="user.html_url"> {{ user.login }} </a>
        </div>
      </div>
      <div v-if="order == 'asc'" class="user-list  reverse">
        <div class="users" v-for="user in users" v-bind:key="user">
          <img :src="user.avatar_url" />
          <a :href="user.html_url"> {{ user.login }} </a>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isSearching" class="modalCont">

    <div v-if="isSearching" class="modal">
      <p>Loading...</p>
    </div>
  </div>
  <div></div>
</template>

<script>
import { getUsers } from "../services/search.services";
export default {
  name: "MainComponent",

  data() {
    return {
      users: undefined,
      location: "",
      date: "",
      username: "",
      page: 1,
      isSearching: false,
      lastPageNumber: undefined,
      order: 'desc',
      yearList: []
    };
  },

  methods: {
    async search() {
      this.isSearching = true;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;
      if (!date) {
        this.searchYear()
      }
      let total;
      try {
        total = await getUsers(date, username, location, page, this.order);
      } catch {
        if (total.error) {
          alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
          this.search()
        }
      }
      this.total = total.data.total_count;
      this.lastPageNumber = this.total / 20;
      if (this.total > 1000) {
        this.lastPageNumber = 50
      }
      let response
      try {
        response = await getUsers(date, username, location, page, this.order);
      } catch {
        if (response.error) {
          alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
          this.search()
        }
      }
      this.isSearching = false;
      this.users = response.data.items;

    },

    async firstPage() {
      this.isSearching = true;
      this.page = 1;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;
      this.order = 'desc';
      let response = await getUsers(date, username, location, page, this.order);
      if (response.error) {
        alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
      }
      this.isSearching = false;
      this.users = response.data.items;
    },
    async prevPage() {
      if (this.order == 'desc') {

        this.isSearching = true;
        this.page--;
        let username = this.username;
        let location = this.location;
        let date = this.date;
        let page = this.page;
        let response
        try {
          response = await getUsers(date, username, location, page, this.order);
        } catch {
          if (response.error) {
            alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
            this.page++
          }
        }
        this.isSearching = false;
        this.users = response.data.items;
      } else {
        this.isSearching = true;
        this.page++;
        let username = this.username;
        let location = this.location;
        let date = this.date;
        let page = this.page;
        let response
        try {
          response = await getUsers(date, username, location, page, this.order);
        } catch {
          if (response.error) {
            alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
            this.page--
          }
        }
        this.isSearching = false;
        this.users = response.data.items;
      }
    },
    async nextPage() {
      if (this.order == 'desc') {

        this.isSearching = true;
        this.page++;
        let username = this.username;
        let location = this.location;
        let date = this.date;
        let page = this.page;
        let response
        try {
          response = await getUsers(date, username, location, page, this.order);
        } catch {
          if (response.error) {
            alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
            this.page--
          }
        }
        this.isSearching = false;
        this.users = response.data.items;
      } else {
        this.isSearching = true;
        this.page--;
        let username = this.username;
        let location = this.location;
        let date = this.date;
        let page = this.page;
        let response;
        try {
          response = await getUsers(date, username, location, page, this.order);
        } catch {
          if (response.error) {
            alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
            this.page++
          }
        }
        this.isSearching = false;
        this.users = response.data.items;
      }
    },
    async lastPage() {
      this.isSearching = true;
      this.page = 1;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;
      this.order = 'asc'
      let response
      try {
        response = await getUsers(date, username, location, page, this.order);
      } catch {
        if (response.error) {
          alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
        }
      }
      this.isSearching = false;
      this.users = response.data.items;
    },
    async searchYear() {

      let username = this.username;
      let location = this.location;
      let page = this.page;
      for (let index = 2008; index < 2023; index++) {
        let response;
        try {
          response = await getUsers(index.toString(), username, location, page, this.order);
          if (response.data.total_count > 0) {
            let year = index.toString()
            let count = response.data.total_count
            this.yearList.push({ year, count })
          }
        } catch {
          if (response.error) {
            alert('you are authenticated but you are limited to 30 requests per minute, please wait a bit before continuing')
            index--
          }
        }
      }
    },
    async yearfilter(date) {
      this.date = date
      this.search()
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searching {
  cursor: wait !important;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.users {
  display: flex;
  align-items: center;
  height: 3rem;
  margin: .5rem;
  width: 300px;
}

.users a {
  color: #C9D1D9;
}

.users img {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
  margin: .5rem;
}

.search-btn {
  color: white;
  font-weight: 550;
  ;
  background: #2EA043;
  padding: 0.8rem 0.8rem;
  border-radius: 0.5rem;
  width: fit-content;
}

.search-bar {
  background: #161B22;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  z-index: 101;

  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 100px;
  height: 50px;
  max-width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #30363D;
  color: #C9D1D9;

}

.select-country select {
  background: #30363D;
  border: 1px solid #8B949E;
  color: #C9D1D9;
  font-weight: 600;
  padding: 0.8rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  width: fit-content;
}

.username-input input {
  background: #30363D;
  border: 1px solid #8B949E;
  color: #C9D1D9;
  margin-right: 0.5rem;
  padding: 0.8rem;
  border-radius: 0.5rem;

}

.paginate {
  display: flex;
  justify-content: center;
}

.paginate div {
  color: white;
  font-weight: 550;
  ;
  background: #2EA043;
  padding: 0.8rem 0.8rem;
  border-radius: 0.5rem;
  width: fit-content;
  margin: 0.3rem;
  cursor: pointer;
}

.total {
  margin: 1rem;
}

.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.user-list.reverse {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column-reverse;
}

.yearList {
  width: 200px;
  margin-left: 4rem;
}
.modalCont{
  position: fixed;
  width: 100vw;
  height: 100vw;
  cursor: wait;
  z-index: 100;
  background: #161b2259;
}
.yearList div {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background: #30363D;
  padding: .5rem;
  border-radius: .5rem;
  width: 100%;
  height: fit-content;
  color: #C9D1D9;
  margin: .25rem;
}
.yearList .yearSigned{
  background-color: #6E7681;
  color: #F1F6FF;
  font-weight: bold;
  
  border-radius: 2rem;
  padding: .3rem;
  font-size: .8rem;
}

.yearList div:hover {
  background: #161B22;
  transition: ease all .3s;
}

.yearList div.active {
  background: #2EA043;
}

.yearList div.active:hover {
  background: #268337;
}

.yearList div p {
  margin: .25rem;
}

.duo {
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: start;
}
</style>
