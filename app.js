// tasks section
const tasks = [
  {
    id: 1,
    round: 1,
    designer: "Rohullah",
    time: 24,
    title: "DevGrpup full Project Development",
    info: `Create projects, improve the platform`,
    link: "",
    finalLink: "https://dev_group_mu.vercel.app",
    state: "in progress",
  },
  {
    id: 1,
    round: 1,
    designer: "latif",
    time: 24,
    title: "Univercity project management and development",
    info: `updating according to latest technologies`,
    link: "",
    finalLink: "",
    state: "in progress",
  },
];
const Users = [
  {
    id: 1,
    name: "Rohullah Ahmadi",
    image: "./assets/RohullahProfile.png",
    username: "Rohullah",
    password: "neo",
  },
  {
    id: 2,
    name: "Latif Khiradmand",
    image: "./assets/latifProfile.jpeg",
    username: "latif",
    password: "l0ve",
  },
  {
    id: 3,
    name: "Hanif Sarabi",
    image: "./assets/hanifPorfile.jpeg",
    username: "sarabi",
    password: "Hanif@#2001",
  },
  {
    id: 4,
    name: "Mahram Rezaiee",
    image: "./assets/mahramProfile.jpeg",
    username: "mahram",
    password: "M523",
  },
  {
    id: 5,
    name: "Ali Reza Hashimi",
    image: "./assets/hashimiProfile.jpeg",
    username: "hashimi",
    password: "Ali435",
  },
  {
    id: 6,
    name: "Ali Mazhar",
    image: "./assets/Mazhar.png",
    username: "Mazhar",
    password: "M465",
  },
  {
    id: 6,
    name: "Rezwan Karimi",
    image: "./assets/Karimi.png",
    username: "Karimi",
    password: "R6532",
  },
];

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const eye = document.querySelector("#eyeBtnPassword");
const loginsection = document.querySelector("#loginsec");
const notes = document.querySelector("#notes");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else if (password.type === "text") {
    password.type = "password";
  }
});

function login() {
  const user = Users.find((u) => {
    return u.username === username.value && u.password === password.value;
  });
  if (user) {
    loginsection.classList.add("hidden");
    document.querySelector("#asideTitleShow").classList.add("hidden");

    tasks.forEach((task) => {
      if (username.value === task.designer) {
        const container = document.createElement("div");
        container.classList =
          "flex flex-col gap-2 p-2 xl:w-150 w-full h-max rounded-md bg-white/50";
        container.innerHTML = `
              <div class="flex p-2 border rounded-md items-center justify-between">
              <h2 class="text-xl font-bold"> <stron>Title: </strong> ${task.title}</h2>  
                 <p><strong>Designer: </strong>${task.designer}</p>
              </div>
                <div class="flex p-2 border rounded-md items-center justify-between">
               <h1><strong>No: </strong>${task.round}</h1>  
               <p><strong> Time: </strong> ${task.time} hours</p>  
              </div>
              <div class="flex p-2 border rounded-md items-center justify-between  backdrop-blur-xl">
              <p class="flex flex-col gap-1 items-start"><strong>جزئیات: </strong>${task.info}</p>
              </div>
             
             <div class="flex items-center justify-between px-8 gap-10">
                <a href="${task.finalLink}" class="hover:underline text-black-800 hover:text-blue-800"> Task Final view made by ${task.designer}</a>
                <span class="flex items-center p-2">
                <span id="stateIconContainer">
                <span>
                  ${task.state}
                </span>
              </div>
              <img src="${task.link}" class="w-full h-auto rounded-xl" />
              `;
        document.querySelector("#taskContainer").appendChild(container);
      }
    });
    username.value = "";
    password.value = "";
  } else if (username.value === "admin" && password.value === "password") {
    loginsection.classList.add("hidden");
    document.querySelector("#asideTitleShow").classList.add("hidden");
    tasks.forEach((task) => {
      const container = document.createElement("div");
      container.classList =
        "flex flex-col gap-2 p-2 xl:w-150 w-full h-max rounded-md bg-white/50";
      container.innerHTML = `
              <div class="flex p-2 border rounded-md items-center justify-between">
              <h2 class="text-xl font-bold"> <stron>Title: </strong> ${task.title}</h2>  
                 <p><strong>Designer: </strong>${task.designer}</p>
              </div>
                <div class="flex p-2 border rounded-md items-center justify-between">
               <h1><strong>No: </strong>${task.round}</h1>  
               <p><strong> Time: </strong> ${task.time} hours</p>  
              </div>
              <div class="flex p-2 border rounded-md items-center justify-between  backdrop-blur-xl">
              <p class="flex flex-col gap-1 items-start"><strong>جزئیات: </strong>${task.info}</p>
              </div>
             
              <div class="flex items-center justify-between px-8 gap-10">
                <a href="${task.finalLink}" class="hover:underline text-black-800 hover:text-blue-800"> Task Final view made by ${task.designer}</a>
                <span class="flex items-center p-2">
                <span id="stateIconContainer" class="stateIconContainer">
                </span>
                  ${task.state}
                </span>
              </div>
              <img src="${task.link}" class="w-full h-auto rounded-xl" />
            `;
      document.querySelector("#taskContainer").appendChild(container);
    });

    username.value = "";
    password.value = "";
  } else {
    toast();
    username.value = "";
    password.value = "";
  }
}

function toast() {
  const container = document.createElement("div");
  container.classList =
    "flex p-2 gap-4 rounded-md bg-white/40 backdrop-blur-xl items-center z-50 enter";
  container.innerHTML = `
        <span class="p-1 rounded-full text-2xl text-white bg-red-400"><i class="fas fa-x"></i></span>
        <h1>Login faild, try again</h1>
        <span class="w-full h-1 bg-black absolute bottom-0 left-0 rounded-md animate"></span>
        `;
  document.querySelector("#toastcontaienr").appendChild(container);
  setTimeout(() => {
    container.remove();
  }, 5000);
}

function updateState() {
  if (task.state === "completed") {
    document.querySelector("#stateIcon").classList = "fas fa-user";
    document.querySelector("#stateIconContainer").classList =
      "flex p-1 gap-2 rounded-full bg-green-700 text-white";
  } else if (task.state === "incomplete") {
    document.querySelector("#stateIcon").classList = "fas fa-x";
    document.querySelector("#stateIconContainer").classList =
      "flex p-1 rounded-full bg-red-600 text-white";
  }
}

// titleShow
function showtasksTitle() {
  const titleContainer = document.createElement("div");
  titleContainer.classList =
    "flex items-center justify-end shadow-xl bg-white h-10 w-full rounded-r-full relative";
  titleContainer.innerHTML = `<button onclick="showTitle()" class="w-full  rounded-r-full relative full w-full flex items-center justify-end px-4 text-xl bg-white"><i class="fas fa-chevron-right"></i></button>`;
  document.querySelector("#titleShow").appendChild(titleContainer);
  Users.forEach((user) => {
    const container = document.createElement("button");
    container.setAttribute("onclick", `updateTitle('${user.username}')`);
    container.classList =
      "flex items-center gap-2 p-1 hover:scale-110 hover:shadow-xl cursor-pointer hover:bg-white/20  rounded-full ml-2 h-max w-70 w-full justify-center  titleContainer duration-300";
    container.innerHTML = `
    <img src="${user.image}" class="w-8 h-8 rounded-full" />
    <div class="flex w-full h-full items-center  text-black hidden title duration-200">
      <p class="w-full userName">${user.username}</p>
    </div>
    `;
    document.querySelector("#titleShow").appendChild(container);
  });
}
showtasksTitle();

function showTitle() {
  document.querySelectorAll(".titleContainer").forEach((container) => {
    container.classList.toggle("w-34");
    container.classList.toggle("rounded-full");
    container.classList.toggle("rounded-xl");
    container.addEventListener("click", () => {});
  });
  document.querySelectorAll(".title").forEach((title) => {
    title.classList.toggle("hidden");
  });
}
// aside click option

document.querySelectorAll(".titleContainer").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".titleContainer").forEach((item) => {
      item.classList.add("hover:scale-110");
      item.classList.remove("scale-110");
      item.classList.add("hover:shadow-xl");
      item.classList.remove("shadow-xl");
      item.classList.add("hover:bg-white/20");
      item.classList.remove("bg-white/20");
    });
    item.classList.toggle("scale-110");
    item.classList.toggle("shadow-xl");
    item.classList.toggle("bg-white/20");

    document.querySelector("#titleText").classList.add("w-80");
  });
});

// notes js
function showNotification() {
  document.querySelector("#notes").classList.toggle("show");
  document.querySelector("#notes").classList.toggle("show1");
}

function titleTextClose() {
  document.querySelector("#titleText").classList.toggle("w-80");
}

function updateTitle(e) {
  document.querySelector("#titleText2").innerHTML = "";
  let i = 1;
  tasks.forEach((tas) => {
    if (e === tas.designer) {
      const container = document.createElement("div");
      container.classList =
        "flex gap-2 items-center bg-white/50 p-1 w-full text-sm rounded-xl";
      container.innerHTML = `
      <span class='flex w-8 h-8 shrink-0 items-center p-1 rounded-full justify-center bg-green-300'>${i++}</span>
       <div class="flex flex-col w-full">
          <strong>Designer: ${tas.designer}</strong>
          <p class="font-semibold">${tas.title}</p>  
          <div class="flex items-center w-full justify-between"> 
            <span>Round: ${tas.round}</span>
            <p id="taskState" class="flex items-center gap-1 px-2">
            ${tas.state}</p>
         </div>
        </div>
        `;
      document.querySelector("#titleText2").append(container);
    }
  });
}
