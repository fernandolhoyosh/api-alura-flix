
  const videos = [
    {
      title: "Cuándo usar let, var y const?",
      category: "FRONT END",
      image: "https://i.ytimg.com/vi/PztCEdIJITY/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCd5jxSprvo-KAWg2kDt9y5Kv7OqA",
      video: "https://www.youtube.com/embed/PztCEdIJITY",
      description: "¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.",
      id: "1"
    },
    {
      title: "¿Qué es JavaScript?",
      category: "FRONT END",
      image: "https://i.ytimg.com/vi/GJfOSoaXk4s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDreFD5RmKqHAKumA40iu2Y7WRlng",
      video: "https://www.youtube.com/embed/GJfOSoaXk4s",
      description: "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.",
      id: "2"
    },
    {
      id: "3",
      title: "Equipo Front End",
      category: "FRONT END",
      image: "https://i.ytimg.com/vi/rpvrLaBQwgg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDoze14OaiA2WUOaVtMzo9bhOet7g",
      video: "https://www.youtube.com/embed/rpvrLaBQwgg",
      description: "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?"
    },
    {
      title: "Spring Framework. ¿Qué es ?",
      category: "BACK END",
      image: "https://i.ytimg.com/vi/t-iqt1b2qqk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCCiPwSxhGt7zBegf93rY6SD-4YJg",
      video: "https://www.youtube.com/embed/t-iqt1b2qqk",
      description: "¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda",
      id: "4"
    },
    {
      title: "¿Qué es SQL y NoSQL?",
      category: "BACK END",
      image: "https://i.ytimg.com/vi/cLLKVd5CNLc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBIu9X8EX0BH25qxdBR_AdlWDbQAg",
      video: "https://www.youtube.com/embed/cLLKVd5CNLc",
      description: "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una?",
      id: "5"
    },
    {
      title: "Simplificando tu código en Java: Conoce los enum",
      category: "BACK END",
      image: "https://i.ytimg.com/vi/EoPvlE85XAQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDjvUhEzhOC3WSE3vOQlg1lJaDEmQ",
      video: "https://www.youtube.com/embed/EoPvlE85XAQ",
      description: "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? En este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum.",
      id: "6"
    },
    {
      title: "¿Qué son las Soft Skills?",
      category: "INNOVACIÓN Y GESTIÓN",
      image: "https://i.ytimg.com/vi/vhwspfvI52k/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDCRBzW3OEDOzjA9T5cnuH3sBJ54A",
      video: "https://www.youtube.com/embed/vhwspfvI52k",
      description: "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.",
      id: "7"
    },
    {
      title: "7 Soft Skills más deseadas por las empresas",
      category: "INNOVACIÓN Y GESTIÓN",
      image: "https://i.ytimg.com/vi/YhR7Zp8NUzE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBKJl87gbTgiZQQAxYgRBUWbM5KcQ",
      video: "https://www.youtube.com/embed/YhR7Zp8NUzE",
      description: "Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? Quédate en este video con nosotros que vamos a explicarte la importancia de estas habilidades y porque son tan requeridas en el mercado laboral.",
      id: "8"
    },
    {
      title: "¿Qué son las metodologias ágiles?",
      category: "INNOVACIÓN Y GESTIÓN",
      image: "https://i.ytimg.com/vi/6N3OkLCfK-0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBoZaxZEgA9C-tQTjjhIuaOL5TsMA",
      video: "https://www.youtube.com/embed/6N3OkLCfK-0",
      description: "En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles y nos comentará un poco sobre como aplicarlas y cuáles son los beneficios de utilizarlas en su equipo o empresa.",
      id: "9"
    }
  ]

module.exports = videos;