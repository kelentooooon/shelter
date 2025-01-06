export const loadMedia = (mediaUrls) => {
    return Promise.all(
      mediaUrls.map((url) => {
        return new Promise((resolve, reject) => {
          if (url.endsWith('.mp4')) {
            // Handle video files
            fetch(url)
              .then((response) => {
                if (response.ok) {
                  resolve();
                } else {
                  reject(new Error('Failed to load video'));
                }
              })
              .catch(reject);
          } else {
            // Handle image files
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          }
        });
      })
    );
  };