module.exports = function(grunt) {
  var secrets = null;
  try {
    secrets = grunt.file.readJSON('etc/secrets.json');
  } catch (ex) {
    console.error("Ignoring error reading secrets: ", ex);
  }

  grunt.initConfig({
    webstore_upload: {
      accounts: {
        default: {
          publish: true,
          client_id: secrets ? secrets.chrome_client_id : null,
          client_secret: secrets ? secrets.chrome_client_secret : null
        }
      },
      extensions: {
        "squarespace-escape-suppressor": {
          appID: "FIXME",
          zip: 'squarespace-escape-suppressor.zip'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webstore-upload');
};
