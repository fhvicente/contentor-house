export const reqUrl = 'http://contentorhouse.local/wp-json/wp/v2';

export const fetchConfig = {
  next: { 
    revalidate: 3600 // Revalidar dados a cada 1 hora
  },
  headers: {
    'Accept-Encoding': 'gzip, deflate, br'
  }
};

export const staticFetchConfig = {
  next: { 
    revalidate: 86400 // Revalidar dados estáticos a cada 24 horas
  },
  headers: {
    'Accept-Encoding': 'gzip, deflate, br'
  }
};