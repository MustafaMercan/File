export const postRequest = (url,data) => {

    
    // HTTP POST isteği yapılacak olan veriler
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  
    // Verileri belirtilen URL'ye gönderen HTTP isteği
    return fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        // İstek başarısız olduğunda veya bir hata oluştuğunda uygun bir şekilde yönetebiliriz.
        // Örneğin, hata durumunu veya bir geri bildirim gösterebiliriz.
        return { error: true, message: error.message };
      });
  };

  export const getRequest = (url) => {
    // Belirtilen URL'e GET isteği yapılacak
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        return { error: true, message: error.message };
      });
  };