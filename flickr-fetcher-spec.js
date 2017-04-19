'use strict';

var expect = require('chai').expect;
var FlickrFetcher = require('./flickr-fetcher.js');

describe('FlickrFetcher', function() {
  it('should exist', function() {
    expect(FlickrFetcher).to.not.be.undefined;
  });
});

describe('#photoObjToUrl()', function() {
  it('should take a Flickr object and return a string', function() {
    var input = {
      id: '24770505034',
      owner: '97248275@N03',
      secret: '31a9986429',
      server: '1577',
      farm: 2,
      title: '20160229090898',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };

    var expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
    var actual = FlickrFetcher.photoObjToUrl(input);
    expect(actual).to.be.eql(expected);

    input = {
      id:       '24770504484',
      owner:    '97248275@N03',
      secret:   '69dd90d5dd',
      server:   '1451',
      farm:     2,
      title:    '20160229090903',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };
    expected = 'https://farm2.staticflickr.com/1451/24770504484_69dd90d5dd_b.jpg';
    actual = FlickrFetcher.photoObjToUrl(input);
    expect(actual).to.eql(expected);
  });
});

describe('#transformPhotoObj()', function() {
  it('should take photo obj and return only title and url', function() {
    var input = {
      id: '24770505034',
      owner: '97248275@N03',
      secret: '31a9986429',
      server: '1577',
      title: 'Dog goes to desperate measure to avoid walking on a leash',
      farm: 2,
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };

    var expected = {
      title: 'Dog goes to desperate measure to avoid walking on a leash',
      url: 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
    };
    var actual = FlickrFetcher.transformPhotoObj(input);
    expect(actual).to.eql(expected);
    input = {
      id:       '24765033584',
      owner:    '27294864@N02',
      secret:   '3c190c104e',
      server:   '1514',
      farm:     2,
      title:    'the other cate',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };
    expected = {
      title: 'the other cate',
      url:   'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg'
    }
    actual = FlickrFetcher.transformPhotoObj(input);
    expect(actual).to.eql(expected);
  });
});
