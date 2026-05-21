// FAKE KEY FOR LEAK DETECTION TESTING ONLY

type AWSCredentials = {
  access_key_id: string;
  secret_access_key: string;
  session_token: string;
};

const awsCredentials: AWSCredentials = {
  access_key_id: "AKIAIOSFODNN7EXAMPLE",
  secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  session_token: "AQoDYXdzEJr//////////wEaoAK1wvxJY12r2IpXw7bXQfTVQEXAMPLEsessiontoken",
};

export default awsCredentials;
