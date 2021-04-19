const request = require('supertest');
const app = require('./server.js');

app.get('/test', (req, res) => {
  res.status = 200;
  res.send('passed!');
});

describe('test route', () => {
  it('should return the 200 status code', (done) => {
    request(app)
      .get('/test')
      .expect(200)
      .then((res) => {
        return done();
      })
      .catch((err) => {
        return done(err)
      });
    }
  );


  it('should return the sent response', (done) => {
    request(app)
      .get('/test')
      .expect('passed!')
      .end((err, res) => {
        if(err) return done(err);
        return done();
      });
    }
  );
  })


  app.get('/reviws/:id', (req, res) => {
    res.status = 200;
    res.send('passed!');
  });

  describe('reviews route', () => {
    const id = 19289
    it('should return the 200 status code', (done) => {
      request(app)
        .get(`/reviews/${id}`)
        .expect(200)
        .then((res) => {
          return done();
        })
        .catch((err) => {
          return done(err)
        });
      }
    );


    it('should return the sent response', (done) => {
      request(app)
        .get(`/reviews/${id}`)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) return done(err);
          return done();
        });
      }
    );
    })


    app.get('/reviws/meta/:id', (req, res) => {
      res.status = 200;
      res.send('passed!');
    });

    describe('reviews route', () => {
      const id = 19289
      it('should return the 200 status code', (done) => {
        request(app)
          .get(`/reviews/meta/${id}`)
          .expect(200)
          .then((res) => {
            return done();
          })
          .catch((err) => {
            return done(err)
          });
        }
      );


      it('should return the sent response', (done) => {
        request(app)
          .get(`/reviews/meta/${id}`)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if(err) return done(err);
            return done();
          });
        }
      );
      })
