export default async (request) => {
  try {
    return (await request).data;
  } catch (err) {
    if (err.response.status === 401) {
      throw err.response.data;

    }
    throw err.response.data;
  }
};
