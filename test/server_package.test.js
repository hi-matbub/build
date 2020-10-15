const package = require('../src/lib/example_package.json');

describe('package.json for boilerplate', () => {
  it("Package name should read 'express-server'", () => {
    const expected = 'express-server';
    const actual = package.name;

    expect(actual).to.equal(expected);
  });
  it('Package name should be a string', () => {
    const actual = package.name;

    expect(actual).to.be.a('string');
  });

  it('Package should match "0.0.1"', () => {
    const expected = '0.0.1';
    const actual = package.version;

    expect(actual).to.equal(expected);
  });
  it('Package version should be a string', () => {
    const actual = package.version;

    expect(actual).to.be.a('string');
  });

  it("Package description should read 'express.js server'", () => {
    const expected = 'express.js server';
    const actual = package.description;

    expect(actual).to.equal(expected);
  });
  it('Package description should be a string', () => {
    const actual = package.description;

    expect(actual).to.be.a('string');
  });

  it('Package main should be at src/app.js', () => {
    const actual = package.main;

    expect(actual).to.equal('src/app.js');
  });
  it('Package main should be a string', () => {
    const actual = package.main;

    expect(actual).to.be.a('string');
  });

  it('Package test scripts should use mocha', () => {
    const actual = package.scripts.test;

    expect(actual).to.equal('mocha --require test/setup.js');
  });
  it('Package test scripts should be a string', () => {
    const actual = package.scripts.test;

    expect(actual).to.be.a('string');
  });

  it('Package start scripts should use node', () => {
    const actual = package.scripts.start;

    expect(actual).to.equal('node src/server.js');
  });
  it('Package start scripts should be a string', () => {
    const actual = package.scripts.start;

    expect(actual).to.be.a('string');
  });

  it('Package dev scripts should use nodemon', () => {
    const actual = package.scripts.dev;

    expect(actual).to.equal('nodemon src/server.js');
  });
  it('Package dev scripts should be a string', () => {
    const actual = package.scripts.dev;

    expect(actual).to.be.a('string');
  });

  it('Package audit script should exist', () => {
    const actual = package.scripts.audit;

    expect(actual).to.equal('npm audit');
  });
  it('Package audit script should be a string', () => {
    const actual = package.scripts.audit;

    expect(actual).to.be.a('string');
  });

  it('Package scripts should match', () => {
    const actual = package.scripts;
    const expected = {
      test: 'mocha --require test/setup.js',
      start: 'node src/server.js',
      dev: 'nodemon src/server.js',
      audit: 'npm audit',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package scripts should be an object', () => {
    const actual = package.dependencies;

    expect(actual).to.be.a('object');
  });

  it('Package author should exist', () => {
    const actual = package.author;

    expect(actual).to.equal('@hi-matbub');
  });

  it('Package dependencies should match', () => {
    const actual = package.dependencies;
    const expected = {
      cors: '^2.8.5',
      dotenv: '^8.2.0',
      express: '^4.17.1',
      helmet: '^4.1.1',
      morgan: '^1.10.0',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package dependencies should be an object', () => {
    const actual = package.dependencies;

    expect(actual).to.be.a('object');
  });

  it('Package devDependencies should match', () => {
    const actual = package.devDependencies;
    const expected = {
      chai: '^4.2.0',
      mocha: '^8.1.3',
      nodemon: '^2.0.4',
      supertest: '^4.0.2',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package devDependencies should be an object', () => {
    const actual = package.devDependencies;

    expect(actual).to.be.a('object');
  });
});
