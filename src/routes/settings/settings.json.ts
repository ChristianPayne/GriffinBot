import fs from "fs";

const settingsFilePath = './src/routes/settings/settings.json';

export async function get() {
  let settings = await fs.readFileSync(settingsFilePath, {encoding:'utf8', flag:'r'});

	if (!settings)
  {
    return {
      status: 404,
      body: {message: "No Settings Found"}
    }
  }

  return {
    status: 200,
    body: settings
	};
}

export async function post(request) {
  try {
    await fs.writeFileSync(settingsFilePath, request.body)
    return {
      status:200,
      body: JSON.stringify("All good")
    }
  } catch (error) {
    return {
      status:500,
      body: JSON.stringify("Something went wrong.")
    }
  }
  
}

// export async function post(settings:string) {
//   if(!settings) return {status: 400};

//   await fs.writeFileSync(settingsFilePath, settings, {encoding:'utf8', flag:'w'});
// }