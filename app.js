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
    title: "Modern Navbar Design",
    info: `
    ابتدا یک هدر در بالای صفحه ایجاد کنید. لوگو را در سمت چپ و منو را در سمت راست قرار دهید. لینک‌های خانه، درباره، خدمات و تماس اضافه کنید. یک دکمه برجسته مانند شروع کنید قرار دهید. با Tailwind رنگ مناسب، فاصله داخلی، سایه و ارتفاع استاندارد بدهید. هدر را با Flex مرتب کنید و برای موبایل منوی همبرگر بسازید.`,
    link: "https://google.com",
  },
  {
    id: 3,
    round: 1,
    designer: "mahram",
    time: 24,
    title: "Smart To Do App",
    info: `برای ساخت برنامه Todo، ابتدا صفحه‌ای با HTML بساز. با Tailwind ظاهر زیبا بده. یک input برای نوشتن کارها و دکمه افزودن قرار بده. با JavaScript هنگام کلیک، کار جدید اضافه کن. امکان حذف، علامت انجام‌شده و ذخیره در localStorage را نیز ایجاد کن. طراحی را واکنش‌گرا و مرتب نگه دار.`,
    link: "https://google.com",
  },
  {
    id: 4,
    round: 1,
    designer: "hashimi",
    time: 24,
    title: "Product Page",
    info: `
    ابتدا ساختار صفحه را با HTML بسازید. هدر، عنوان و بخش محصولات را اضافه کنید. سپس برای هر محصول کارت شامل تصویر، نام، قیمت و دکمه خرید طراحی کنید. با Tailwind رنگ، فاصله و سایه بدهید. کارت‌ها را با flex مرتب کنید. صفحه را واکنش‌گرا سازید. در پایان فوتر اضافه کرده و ظاهر صفحه را بررسی کنید کامل.
    `,
    link: "https://google.com",
  },
  {
    id: 5,
    round: 1,
    designer: "nabavi",
    time: 30,
    title: "Simple Profile",
    info: `
    یک صفحه پروفایل ساده طراحی کنید. با HTML ساختار صفحه را بسازید و یک عکس، نام، توضیح کوتاه و دکمه تماس اضافه کنید. سپس با CSS رنگ پس‌زمینه، فونت مناسب، فاصله داخلی و سایه بدهید. کارت را در مرکز صفحه قرار دهید. در پایان برای دکمه افکت Hover اضافه کنید تا زیباتر و حرفه‌ای‌تر دیده شود.`,
    link: "https:/image/jpeg;base64,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",
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
const notes = document.querySelector("#notes");

function login() {
  const user = Users.find((u) => {
    return u.username === username.value && u.password === password.value;
  });
  if (user) {
    loginsection.classList.add("hidden");
    notes.classList.add("hidden");

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
              <p dir="rtl" class="flex flex-col gap-1 items-start"><strong>جزیات: </strong>${task.info}</p>
              </div>
             
              <a href="${task.link}" class=" hover:underline text-blue-800"> Task image sample link</a>
             
            `;
        document.querySelector("#taskContainer").appendChild(container);
      }
    });
    username.value = "";
    password.value = "";
  }
  if (username.value === "admin1" && password.value === "neo1") {
    loginsection.classList.add("hidden");
    notes.classList.add("hidden");
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
              <p dir="rtl" class="flex flex-col gap-1 items-start"><strong>جزیات: </strong>${task.info}</p>
              </div>
             
              <a href="${task.link}" class=" hover:underline text-blue-800"> Task image sample link</a>
             
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
