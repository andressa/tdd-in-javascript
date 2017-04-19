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
  },
  transformPhotoObj: function(photoObj) {
    return {
      title: photoObj.title,
      url: this.photoObjToUrl(photoObj)
    }
  }
};

module.exports = FlickrFetcher;
