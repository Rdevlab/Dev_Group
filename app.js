
// tasks section
const tasks = [
  {
    id: 1,
    round: 1,
    designer: "Rohullah",
    time: 24,
    title: "I love you",
    info: `I love you too`,
    link: "https://google.com",
  },
  {
    id: 2,
    round: 1,
    designer: "sarabi",
    time: 12,
    title: "Wellcome to your tasks page",
    info: "You have a new task assigned to you",
    link: "https://google.com",
  },
  {
    id: 3,
    round: 1,
    designer: "mahram",
    time: 18,
    title: "Wellcome to your tasks page",
    info: "Please review the latest design mockups",
    link: "https://google.com",
  },
  {
    id: 4,
    round: 1,
    designer: "hashimi",
    time: 24,
    title: "Wellcome to your tasks page",
    info: "Complete the documentation for the new feature",
    link: "https://google.com",
  },
  {
    id: 5,
    round: 1,
    designer: "nabavi",
    time: 30,
    title: "Wellcome to your tasks page",
    info: "Fix the bugs reported in the previous release",
    link: "https://google.com",
  },
];













const Users = [
  { id: 1, name: "Rohullah Ahmadi", username: "Rohullah", password: "neo" },
  { id: 2, name: "Hanif Sarabi", username: "sarabi", password: "Hanif@#2001" },
  { id: 3, name: "Mahram Rezaiee", username: "mahram", password: "M523" },
  { id: 4, name: "Ali Reza Hashimi", username: "hashimi", password: "Ali435" },
  { id: 5, name: "Ali Nabavi", username: "nabavi", password: "nabavi12" },
];

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginsection = document.querySelector("#loginsec");

function login() {
  const user = Users.find((u) => {
    return u.username === username.value && u.password === password.value;
  });
  if (user) {
    loginsection.classList.add("hidden");
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
              <p class="flex flex-col gap-1 items-start"><strong>Info: </strong>${task.info}</p>
              </div>
             
              <a href="${task.link}" class=" hover:underline text-blue-800"> Task image sample link</a>
             
            `;
        document.querySelector("#taskContainer").appendChild(container);
      }
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
