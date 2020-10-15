const package = require('../package.json');

describe('package.json', () => {
  it('Package name should read @hi-matbub/build', () => {
    const expected = '@hi-matbub/build';
    const actual = package.name;

    expect(actual).to.equal(expected);
  });
  it('Package name should be a string', () => {
    // const expected = '@hi-matbub/build'
    const actual = package.name;

    expect(actual).to.be.a('string');
  });

  it('Package should match "0.1.6"', () => {
    const expected = '0.1.6';
    const actual = package.version;

    expect(actual).to.equal(expected);
  });
  it('Package version should be a string', () => {
    const actual = package.version;

    expect(actual).to.be.a('string');
  });

  it('Package main should be at src/index.js', () => {
    const actual = package.main;

    expect(actual).to.equal('src/index.js');
  });
  it('Package main should be a string', () => {
    const actual = package.main;

    expect(actual).to.be.a('string');
  });

  it('Package bin should be src/index.js', () => {
    const actual = package.bin.build;

    expect(actual).to.equal('src/index.js');
  });
  it('Package bin should be a string', () => {
    const actual = package.bin.build;

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

  it('Package dependencies should match', () => {
    const actual = package.dependencies;
    const expected = {
      chai: '^4.2.0',
      chalk: '^4.1.0',
      commander: '^6.1.0',
      'fs-extra': '^9.0.1',
      inquirer: '^7.3.3',
      mocha: '^8.1.3',
      'node-emoji': '^1.10.0',
      shelljs: '^0.8.4',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package test scripts should be an object', () => {
    const actual = package.dependencies;

    expect(actual).to.be.a('object');
  });

  it('Package engines should match', () => {
    const actual = package.engines;
    const expected = {
      node: '>=10.15.1',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package engines should be an object', () => {
    const actual = package.engines;

    expect(actual).to.be.a('object');
  });

  it('Package directories should match', () => {
    const actual = package.directories;
    const expected = {
      lib: 'lib',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package directories should be an object', () => {
    const actual = package.dependencies;

    expect(actual).to.be.a('object');
  });

  it('Package repo should include /hi-matbub/build', () => {
    const actual = package.repository;
    const expected = {
      type: 'git',
      url: 'git+https://github.com/hi-matbub/build.git',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package repo should be an object', () => {
    const actual = package.dependencies;

    expect(actual).to.be.a('object');
  });

  it('Package license should be MIT', () => {
    const actual = package.license;
    const expected = 'MIT';
    expect(actual).to.equal(expected);
  });
  it('Package license should be an string', () => {
    const actual = package.license;

    expect(actual).to.be.a('string');
  });

  it('Package bugs should include /hi-matbub/build', () => {
    const actual = package.bugs;
    const expected = {
      url: 'https://github.com/hi-matbub/build/issues',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package repo should be an object', () => {
    const actual = package.dependencies;

    expect(actual).to.be.a('object');
  });

  it('Package homepage should include /hi-matbub/build', () => {
    const actual = package.homepage;
    const expected = 'https://github.com/hi-matbub/build#readme';
    expect(actual).to.equal(expected);
  });
  it('Package homepage should be an string', () => {
    const actual = package.homepage;

    expect(actual).to.be.a('string');
  });

  it('Package scripts should match', () => {
    const actual = package.scripts;
    const expected = {
      test: 'mocha --require test/setup.js',
      prettier: 'prettier --config .prettierrc --write "**/*.js"',
      'prettier-docs': 'prettier --config .prettierrc --write "**/*.md"',
      lint: 'eslint --cache "**/*.js"',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package scripts should be an object', () => {
    const actual = package.scripts;

    expect(actual).to.be.a('object');
  });

  it('Package devDependencies should match', () => {
    const actual = package.devDependencies;
    const expected = {
      eslint: '^7.9.0',
      husky: '^4.3.0',
      'lint-staged': '^10.4.0',
      prettier: '^2.1.2',
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package devDependencies should be an object', () => {
    const actual = package.devDependencies;

    expect(actual).to.be.a('object');
  });

  it('Package lint-staged should match', () => {
    const actual = package['lint-staged'];
    const expected = {
      '*.js': ['npm run prettier', 'eslint --fix'],
      '*.md': ['npm run prettier-docs'],
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package lint-staged should be an object', () => {
    const actual = package.devDependencies;

    expect(actual).to.be.a('object');
  });

  it('Package husky should use lint-staged hook', () => {
    const actual = package.husky;
    const expected = {
      hooks: {
        'pre-commit': 'lint-staged',
      },
    };
    expect(actual).to.deep.equal(expected);
  });
  it('Package husky should be an object', () => {
    const actual = package.husky;

    expect(actual).to.be.a('object');
  });
});
