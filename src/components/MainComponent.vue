<template>
  <div class="hello">
    <div class="search-bar">
      <div :class="'select-country'   ` ${test == 1 ? 'active' : ''} ` ">
        <select
          id="country"
          v-model="location"
          @change="search()"
          name="country"
        >
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
          <option value="BH">Bahrain</option>
          <option value="BD">Bangladesh</option>
          <option value="BB">Barbados</option>
          <option value="BY">Belarus</option>
          <option value="BE">Belgium</option>
          <option value="BZ">Belize</option>
          <option value="BJ">Benin</option>
          <option value="BM">Bermuda</option>
          <option value="BT">Bhutan</option>
          <option value="BO">Bolivia</option>
          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
          <option value="BA">Bosnia and Herzegovina</option>
          <option value="BW">Botswana</option>
          <option value="BV">Bouvet Island</option>
          <option value="BR">Brazil</option>
          <option value="IO">British Indian Ocean Territory</option>
          <option value="BN">Brunei Darussalam</option>
          <option value="BG">Bulgaria</option>
          <option value="BF">Burkina Faso</option>
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
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia">Micronesia, Federated States of</option>
          <option value="Moldova">Moldova, Republic of</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Antilles">Netherlands Antilles</option>
          <option value="Caledonia">New Caledonia</option>
          <option value="Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk">Norfolk Island</option>
          <option value="Northern">Northern Mariana Islands</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestinian">Palestinian Territory, Occupied</option>
          <option value="Panama">Panama</option>
          <option value="Papua">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn">Pitcairn</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="Reunion">Reunion</option>
          <option value="Romania">Romania</option>
          <option value="Russian">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Barthelemy">Saint Barthelemy</option>
          <option value="Helena">Saint Helena</option>
          <option value="Kitts">Saint Kitts and Nevis</option>
          <option value="Lucia">Saint Lucia</option>
          <option value="Martin">Saint Martin</option>
          <option value="Pierre">Saint Pierre and Miquelon</option>
          <option value="Vincent">Saint Vincent and the Grenadines</option>
          <option value="Samoa">Samoa</option>
          <option value="San+Marino">San Marino</option>
          <option value="Saudi+Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra+Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Sint+Maarten">Sint Maarten</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon+Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South+Africa">South Africa</option>
          <option value="South+Georgia">
            South Georgia and the South Sandwich Islands
          </option>
          <option value="South+Sudan">South Sudan</option>
          <option value="Spain">Spain</option>
          <option value="Sri+Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard">Svalbard</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syrian">Syrian</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad">Trinidad</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks">Turks</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United+Arab+Emirates">United Arab Emirates</option>
          <option value="United+Kingdom">United Kingdom</option>
          <option value="United+States">United States</option>
          <option value="United+States+Minor+Outlying+Islands">United States Minor Outlying Islands</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Viet+Nam">Viet Nam</option>
          <option value="Virgin+Islands">Virgin Islands</option>
          <option value="Virgin">Virgin</option>
          <option value="Wallis">Wallis</option>
          <option value="Western+Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
      <div v-if="location" class="username-input">
        <input
          type="text"
          v-model="username"
          name="username"
          id=""
          placeholder="username..."
        />
      </div>
      <div v-if="location" class="search-btn" @click="search">
        <p>Recherche</p>
      </div>
    </div>
    <p class="total">Total users : {{ total }}</p>
    <div class="paginate">
      <div v-if="page != 1" @click="firstPage">
        <p>First</p>
      </div>
      <div v-if="page != 1" @click="prevPage">
        <p>Prev</p>
      </div>
      <div v-if="page != lastPageNumber" @click="nextPage">
        <p>Next</p>
      </div>
      <div v-if="page != lastPageNumber" @click="lastPage">
        <p>Last</p>
      </div>
    </div>
      <div class="user-list">
        <div class="users" v-for="user in users" v-bind:key="user">
          <a :href="user.html_url"> {{ user.login }} </a>
          <img :src="user.avatar_url" />
        </div>
    </div>
    
  </div>
  <div v-if="isSearching" class="modal">
    <p>Loading...</p>
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
      date: {},
      username: "",
      page: 1,
      isSearching: false,
      lastPageNumber: undefined,
    };
  },

  methods: {
    async search() {
      this.isSearching = true;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;

      let total = await getUsers({}, username, location, page);
     
      this.total = total.data.total_count;
       this.lastPageNumber = this.total / 20;
      if(this.total > 1000){
        this.lastPageNumber = 50
      }
      let response = await getUsers(date, username, location, page);
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
      let response = await getUsers(date, username, location, page);
      this.isSearching = false;
      this.users = response.data.items;
    },
    async prevPage() {
      this.isSearching = true;
      this.page--;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;
      let response = await getUsers(date, username, location, page);
      this.isSearching = false;
      this.users = response.data.items;
    },
    async nextPage() {
      this.isSearching = true;
      this.page++;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;
      let response = await getUsers(date, username, location, page);
      this.isSearching = false;
      this.users = response.data.items;
    },
    async lastPage() {
      this.isSearching = true;
      this.page = this.lastPageNumber;
      let username = this.username;
      let location = this.location;
      let date = this.date;
      let page = this.page;
      let response = await getUsers(date, username, location, page , 'desc');
      this.isSearching = false;
      this.users = response.data.items;
    },
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
  margin:2rem;
  width: 5rem;
}
.users a {
  color:#C9D1D9;
}
.users img {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 50%;
}
.search-btn {
  color: white;
  font-weight: 550;;
  background: #2EA043;
  padding: 0.8rem 0.8rem;
  border-radius:0.5rem;
  width: fit-content;
}
.search-bar {
  background: #161B22;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
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
  color:#C9D1D9;

}
.select-country select{
  background: #30363D;
  border: 1px solid #8B949E ;
  color:#C9D1D9;
  font-weight: 600;
  padding : 0.8rem;
  margin-right:0.5rem;
  border-radius:0.5rem;
  width: fit-content;
  }
.username-input input {
  background: #30363D;
  border: 1px solid #8B949E ;
  color:#C9D1D9;
  margin-right:0.5rem;
  padding : 0.8rem;
  border-radius:0.5rem;

}
.paginate{
  display: flex;
  justify-content: center;
}
.paginate div{
  color: white;
  font-weight: 550;;
  background: #2EA043;
  padding: 0.8rem 0.8rem;
  border-radius:0.5rem;
  width: fit-content;
  margin:0.3rem;
}
.total {
  margin:1rem;
}
.user-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
