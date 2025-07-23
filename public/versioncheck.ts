async function loadVersionFromServer() {
  const response = await fetch("/version.txt");
  return await response.text();
}

export async function isInValidVersion(prevVersion: string) {
  const curVerion = await loadVersionFromServer();
  console.log(curVerion, " / ", prevVersion);

  if (curVerion !== prevVersion) {
    return true;
  } else {
    return false;
  }
}
