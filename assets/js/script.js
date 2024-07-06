const result = document.getElementById("result");
const more = document.getElementById("more");

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  function getcontestendtime(endtime) {
    let utcDate = endtime; // ISO-8601 formatted date returned from server
    let localDate = new Date(utcDate);
    let year = localDate.getFullYear();
    let month = localDate.getMonth() + 1;
    let dt = localDate.getDate();
    let hours = localDate.getHours();
    let minutes = localDate.getMinutes() > 0 ? (localDate.getMinutes() > 10 ? localDate.getMinutes() : "0" + localDate.getMinutes()) : "00";


    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    minutes = minutes - 30 + 60;
    hours = hours + 5;
    if(minutes == 60) {
      minutes = '00';
      hours += 1;
    }

    let day = weekday[localDate.getDay()];
    let result = "END :   " + day + " " +
        dt + "/" + month + "/" + year + "   " + hours + ":" + minutes;
    return result;
}

function getdateofstart(start_time) {
  let utcDate = start_time;
  let localDate = new Date(utcDate);
  let year = localDate.getFullYear();
  let month = localDate.getMonth() + 1;
  let dt = localDate.getDate();

  var weekday = new Array(7);
  weekday[0] = "SUN";
  weekday[1] = "MON";
  weekday[2] = "TUE";
  weekday[3] = "WED";
  weekday[4] = "THU";
  weekday[5] = "FRI";
  weekday[6] = "SAT";

  let day = weekday[localDate.getDay()];
  let res = day + " " + dt + "/" + month + "/" + year;
  res = 'START' + ' : ' + res;
  return res;
}

function gettimeofstart(start_time) {
  let utcDate = start_time; // ISO-8601 formatted date returned from server
  let localDate = new Date(utcDate);
  let hours = localDate.getHours() > 0 ? (localDate.getHours() >= 10 ? localDate.getHours() : "0" + localDate.getHours()) : "00";
  let minutes = localDate.getMinutes() > 0 ? (localDate.getMinutes() >= 10 ? localDate.getMinutes() : "0" + localDate.getMinutes()) : "00";
  minutes = minutes+30;
  hours = hours + 5;
  if(minutes == 60) {
    minutes = '00';
    hours += 1;
  }
  let result = hours + ":" + minutes;
  return result;
}

// const apiURL = "https://clist.by";

async function getData() {
    const res = await fetch(`https://clist.by:443/api/v1/contest/?username=mo-jo-dev&api_key=0965da70e684b0485eedc5cf7209098afe12519a&limit=15&offset=0&start__gte=${formatDate(new Date())}&order_by=start&duration__lt=999999`);
    const data = await res.json();
    console.log(data);
    showData(data);
}

function findPlatform(data){
  if(data == 'codeforces.com'){
    return 'assets/img/codeforces.png'
  }
  if(data == 'codingninjas.com/codestudio'){
    return 'assets/img/codingninjas.png'
  }
  if(data == 'atcoder.jp'){
    return 'assets/img/atcoder.png'
  }
  if(data == 'codechef.com'){
    return 'assets/img/codechef.png'
  }
  if(data == 'dmoj.ca'){
    return 'assets/img/dmoj.png'
  }
  if(data == 'cups.online'){
    return 'assets/img/allcup.svg'
  }
  if(data == 'yukicoder.me'){
    return 'assets/img/yukicoder.png'
  }
  if(data == 'hackerearth.com'){
    return 'assets/img/HackerEarth.png'
  }
  if(data == 'topcoder.com'){
    return 'assets/img/topcoder.png'
  }
  if(data == 'geeksforgeeks.org'){
    return 'assets/img/GeeksforGeeks.png'
  }
  if(data == 'tlx.toki.id'){
    return 'assets/img/tlx.png'
  }
  if(data == 'leetcode.com'){
    return 'assets/img/LeetCode.png'
  }
  if(data == 'ctftime.org'){
    return 'assets/img/ctf_time.svg'
  }
  if(data == 'hackerrank.com'){
    return 'assets/img/hackerrank.svg'
  }
  if(data == 'robocontest.uz'){
    return 'assets/img/robocontest.png'
  }
  else{
    return 'assets/img/qm.png'
  }
}

function findPlatformTitle(data){
  if(data == 'codeforces.com'){
    return 'CodeForces'
  }
  if(data == 'codingninjas.com/codestudio'){
    return 'Coding Ninjas'
  }
  if(data == 'atcoder.jp'){
    return 'AtCoder'
  }
  if(data == 'codechef.com'){
    return 'Codechef'
  }
  if(data == 'dmoj.ca'){
    return 'DMOJ'
  }
  if(data == 'cups.online'){
    return 'All Cups'
  }
  if(data == 'yukicoder.me'){
    return 'YukiCoder'
  }
  if(data == 'hackerearth.com'){
    return 'HackerEarth'
  }
  if(data == 'topcoder.com'){
    return 'TopCoder'
  }
  if(data == 'geeksforgeeks.org'){
    return 'GeeksForGeeks'
  }
  if(data == 'tlx.toki.id'){
    return 'TLX'
  }
  if(data == 'leetcode.com'){
    return 'LeetCode'
  }
  if(data == 'ctftime.org'){
    return 'CTF Time'
  }
  if(data == 'hackerrank.com'){
    return 'Hackerrank'
  }
  if(data == 'robocontest.uz'){
    return 'RoboContest'
  }
  else{
    return 'unknown'
  }
}

function showData(data){
    result.innerHTML = `
    <div class="box">
      <ul class="test">
          ${data.objects.map(
              code => `
              <li class="list"><span>
              <strong>${code.event.toUpperCase()}</strong>
              - <span class="comp_name">${findPlatformTitle(code.resource.name)}</span> 
                
              
              <span id="myBtn" class="comp_date">${getdateofstart(code.start)} ${gettimeofstart(code.start)} - ${getcontestendtime(code.end)}</span>
              <div id="myModal" class="modal" style="display:none;">
              <script>console.log(1);</script>
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
              </div>
              </span>

              
              <h3><a href="${code.href}" alt="C-Square" target="_blank"><img class = "comp_icon" src = "${findPlatform(code.resource.name)}"></a></h3>
              </li>
              `
            ).join('')}
            </ul>
            </div>      
            <script src="./assets/js/modal.js"></script>
    `;
    if(true){
    more.innerHTML = `
      ${data.meta.offset - 15 >= 0 ? `<button class="btn" onclick="getMoreTests('${data.meta.offset - 15}')">Prev</button>` : ''}
      ${data.meta.offset + 15 <= 45 ? `<button class="btn" onclick="getMoreTests('${data.meta.offset + 15}')">Next</button>` : ''}
      `;
    }
}


async function getMoreTests(url_offset){
  const res = await fetch(`https://clist.by:443/api/v1/contest/?username=mo-jo-dev&api_key=0965da70e684b0485eedc5cf7209098afe12519a&limit=15&offset=${url_offset}&start__gte=${formatDate(new Date())}&order_by=start&duration__lt=999999`);
  const data = await res.json();
  showData(data);
}

getData();