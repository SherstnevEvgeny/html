 let message = "Изучаем Node.js"; 
 let header = "Главная страница";
 data = data.replace("{header}", header).replace("{message}", message);
 response.end(data);

