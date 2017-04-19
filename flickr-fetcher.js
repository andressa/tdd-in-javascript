var FlickrFetcher = {
  photoObjToUrl: function(photoObj) {
    var url = [
      'https://farm',
      photoObj.farm,
      '.staticflickr.com/',
      photoObj.server,
      '/',
      photoObj.id,
      '_',
      photoObj.secret,
      '_b.jpg'
    ].join('');
    return url;
  }
};

module.exports = FlickrFetcher;
