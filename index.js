async function prepare(pluginConfig, context) {
  console.log("preparing in version-plugin")
  const versionString = "// THIS FILE IS AUTOMATICALLY GENERATED\n#define WATERBEAR_FIRMWARE_VERSION " + context.nextRelease.version
  await execa.shell(`cat ${versionString} > src/version.h`)
}

module.exports = { prepare };
