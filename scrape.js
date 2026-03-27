import https from 'https';
import fs from 'fs';

https.get('https://www.gacgroup.com/en/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const mp4Links = data.match(/https?:\/\/[^"'\s]+\.mp4/gi);
    const picLinks = data.match(/https?:\/\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi);
    
    // Some might just use relative paths without domain
    const allMp4s = new Set([...(mp4Links || [])]);
    const allPics = new Set([...(picLinks || [])]);

    fs.writeFileSync('out.json', JSON.stringify({
      mp4s: Array.from(allMp4s),
      pics: Array.from(allPics)
    }, null, 2));
    console.log("Written to out.json");
  });
}).on('error', (e) => {
  console.error(e);
});
