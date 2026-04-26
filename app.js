// tasks section
const tasks = [
  {
    id: 1,
    round: 1,
    designer: "Rohullah",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 24,
    title: "I love you",
    info: `I love you too`,
    link: "",
    finalLink: " ",
    state: "incomplete",
  },
  {
    id: 2,
    round: 1,
    designer: "sarabi",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 24,
    title: "Modern Navbar Design",
    info: `
    ابتدا یک هدر در بالای صفحه ایجاد کنید. لوگو را در سمت چپ و منو را در سمت راست قرار دهید. لینک‌های خانه، درباره، خدمات و تماس اضافه کنید. یک دکمه برجسته مانند شروع کنید قرار دهید. با Tailwind رنگ مناسب، فاصله داخلی، سایه و ارتفاع استاندارد بدهید. هدر را با Flex مرتب کنید و برای موبایل منوی همبرگر بسازید.`,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3bY1gM9oeOTjVScq88B6A2VpVoM1vc6gDkA&s",
    finalLink: " ",
    state: "completed",
  },
  {
    id: 3,
    round: 1,
    designer: "mahram",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 24,
    title: "Smart To Do App",
    info: `برای ساخت برنامه Todo، ابتدا صفحه‌ای با HTML بساز. با Tailwind ظاهر زیبا بده. یک input برای نوشتن کارها و دکمه افزودن قرار بده. با JavaScript هنگام کلیک، کار جدید اضافه کن. امکان حذف، علامت انجام‌شده و ذخیره در localStorage را نیز ایجاد کن. طراحی را واکنش‌گرا و مرتب نگه دار.`,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpvDZyDL7Vjk0JVBymK02u6yMpkiM8i7cYw&s",
    finalLink: " ",
    state: "completed",
  },
  {
    id: 4,
    round: 1,
    designer: "hashimi",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 24,
    title: "Product Page",
    info: `
    ابتدا ساختار صفحه را با HTML بسازید. هدر، عنوان و بخش محصولات را اضافه کنید. سپس برای هر محصول کارت شامل تصویر، نام، قیمت و دکمه خرید طراحی کنید. با Tailwind رنگ، فاصله و سایه بدهید. کارت‌ها را با flex مرتب کنید. صفحه را واکنش‌گرا سازید. در پایان فوتر اضافه کرده و ظاهر صفحه را بررسی کنید کامل.
    `,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuza7xgQsQwrJukBLtY_ODcm6Zi0XWcfuiw&s",
    finalLink: " ",
    state: "incomplete",
  },
  {
    id: 5,
    round: 1,
    designer: "nabavi",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 24,
    title: "Simple Profile",
    info: `
    یک صفحه پروفایل ساده طراحی کنید. با HTML ساختار صفحه را بسازید و یک عکس، نام، توضیح کوتاه و دکمه تماس اضافه کنید. سپس با CSS رنگ پس‌زمینه، فونت مناسب، فاصله داخلی و سایه بدهید. کارت را در مرکز صفحه قرار دهید. در پایان برای دکمه افکت Hover اضافه کنید تا زیباتر و حرفه‌ای‌تر دیده شود.`,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEmLnwqYWz3YuZGXwEGKd-331uulSryAl-Q&s",
    finalLink: "",
    state: "incomplete",
  },
  // round 2
  {
    id: 2,
    round: 2,
    designer: "sarabi",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 48,
    title: "Pop Up modle",
    info: `پاپ اپ که برای نمایش دادن خطا استفاده میشود. مثلا در صورت درست نبودن پسورد یا هم مشکل ارتباطی انترنت این پاپ اپ شامل یک دکمه برای بستن خطا و مقداری جزیات جزیی باشد. و در اول یک دکمه برای نمایشن دادن خطا. پاپ اپ باید توسط جاوااسکریب اضافه شود. و با با css از لحاظ ظاهری طراحی گردد. `,
    link: "https://i.pinimg.com/236x/10/87/dc/1087dc58864fe9f4a637f876add288bd.jpg",
    finalLink: " ",
    state: "incomplete",
  },
  {
    id: 3,
    round: 2,
    designer: "mahram",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 48,
    title: "Responsive and Animative Navbar",
    info: `یک هیدر با لینک های مجزا که توسط جاوااسکریب اضافه شده و با tailwind طراحی میگردد. لینک باید دارای خاصیت hover effect باشد و با لطافت خیلی بالا. در دستگاه های مختلف باید قابلیت اجرا بدون نقص داشته باشد. هدف از این پروژه بکارگیری array,object میباشد.`,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEV4jLHYgyzxq4CSba-BqguVyZ-RZ9z0i-w&s",
    finalLink: " ",
    state: "incomplete",
  },
  {
    id: 4,
    round: 2,
    designer: "hashimi",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 48,
    title: "Card Container",
    info: `جعبه کارت. محتویاات کارت شامل پروفایل شخصی میباشد که در ان عکس.نام.تخلص.مقداری معلومات کوتاه و دکمه برای تماس باشد. برای طراحی از tailwind استفاده شود و منبح محتویات کارت ها در array,object  ذخیره گردد`,
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Psuggmw_I14zzlM8mt7IxOT-Ds-_EhPiDw&s",
    finalLink: " ",
    state: "incomplete",
  },
  {
    id: 5,
    round: 2,
    designer: "nabavi",
    designerImage:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    time: 48,
    title: "Social Media Links",
    info: `لینک چهار اپ مجازی که شامل فیسبوک. واتساب. گیتهاب. انستاگرام میباشد. هر لینک باید دارنده hover-effect باشد. در این خاصیت برای هم دکمه متفاوت باشد. `,
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84b6ea97785273.5ecd5d6f9e7c4.png",
    finalLink: " ",
    state: "incomplete",
  },
];

const Users = [
  {
    id: 1,
    name: "Rohullah Ahmadi",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    username: "Rohullah",
    password: "neo",
  },
  {
    id: 2,
    name: "Hanif Sarabi",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    username: "sarabi",
    password: "Hanif@#2001",
  },
  {
    id: 3,
    name: "Mahram Rezaiee",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    username: "mahram",
    password: "M523",
  },
  {
    id: 4,
    name: "Ali Reza Hashimi",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    username: "hashimi",
    password: "Ali435",
  },
  {
    id: 5,
    name: "Ali Nabavi",
    image:
      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    username: "nabavi",
    password: "nabavi12",
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
    document.querySelector("#titleShow").classList.add("hidden");

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
              <p dir="rtl" class="flex flex-col gap-1 items-start"><strong>جزئیات: </strong>${task.info}</p>
              </div>
             
             <div class="flex items-center justify-between px-8 gap-10">
                <a href="${task.finalLink}" class="hover:underline text-black-800 hover:text-blue-800"> Task Final view made by ${task.designer}</a>
                <span class="flex items-center p-2">
                <span id="stateIconContainer" class="">
                  <i id="stateIcon"></i>
                </span>
                  ${task.state}
                </span>
              </div>
              <img src="${task.link}" class="w-full h-auto rounded-xl" />
              `;
        document.querySelector("#taskContainer").appendChild(container);
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
      }
      updateState();
    });
    username.value = "";
    password.value = "";
  } else if (username.value === "admin" && password.value === "password") {
    loginsection.classList.add("hidden");
    document.querySelector("#titleShow").classList.add("hidden");
    tasks.forEach((task) => {
      const container = document.createElement("div");
      container.classList = "flex flex-col gap-2 p-2 xl:w-150 w-full h-max rounded-md bg-white/50";
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
              <p dir="rtl" class="flex flex-col gap-1 items-start"><strong>جزئیات: </strong>${task.info}</p>
              </div>
             
              <div class="flex items-center justify-between px-8 gap-10">
                <a href="${task.finalLink}" class="hover:underline text-black-800 hover:text-blue-800"> Task Final view made by ${task.designer}</a>
                <span class="flex items-center p-2">
                <span id="stateIconContainer" class="stateIconContainer">
                <i class="fas fa-checkmark" id="stateIcon"></i>
                </span>
                  ${task.state}
                </span>
              </div>
              <img src="${task.link}" class="w-full h-auto rounded-xl" />
            `;
      document.querySelector("#taskContainer").appendChild(container);
      function updateState() {
        if (task.state === "completed") {
          document.querySelectorAll(".stateIconContainer").forEach((container) => {
            container.classList =
              "flex p-1 gap-2 rounded-full bg-green-700 text-white stateIconContainer";
            document.querySelectorAll(".stateIconContainer i").forEach((icon) => {
              icon.classList = "fas fa-checkmark stateIcon";
            });
          });
        } else if (task.state === "incomplete") {
          document.querySelectorAll(".stateIconContainer").forEach((container) => {
            container.classList = "flex p-1 rounded-full bg-red-600 text-white stateIconContainer";
            document.querySelectorAll(".stateIconContainer i").forEach((icon) => {
              icon.classList = "fas fa-x";
            });
          });
        }
      }
      updateState();
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
      "flex items-center gap-2 p-1 hover:scale-110 hover:shadow-xl cursor-pointer hover:bg-white/20  rounded-full ml-2 h-max w-max justify-center  titleContainer duration-300";
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

    document.querySelector("#titleText").classList.add("w-50");
  });
});

// notes js
function showNotification() {
  document.querySelector("#notes").classList.toggle("show");
  document.querySelector("#notes").classList.toggle("show1");
}

function titleTextClose() {
  document.querySelector("#titleText").classList.toggle("w-50");
}

function updateTitle(e) {
  document.querySelector("#titleText").innerHTML = `<button
          onclick="titleTextClose()"
          class="absolute right-4 top-2 p-1 rounded-full hover:bg-red-400 hover:text-white cursor-pointer duration-200 flex items-center justify-center">
          <i class="fas fa-close"></i>
        </button>`;
  tasks.forEach((tas) => {
    if (e === tas.designer) {
      const container = document.createElement("div");
      container.classList = "flex gap-4 p-2 items-center";
      container.innerHTML = `<button
          onclick="titleTextClose()"
          class="absolute right-4 top-2 p-1 rounded-full hover:bg-red-400 hover:text-white cursor-pointer duration-200 flex items-center justify-center">
          <i class="fas fa-close"></i>
        </button> <p>${tas.title}</p>`;

      document.querySelector("#titleText").append(container);
    }
  });
}
