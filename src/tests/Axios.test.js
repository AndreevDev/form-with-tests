import axios from "axios";

jest.mock("axios");

describe("fetchLocations", () => {
  describe("when API call is successful", () => {
    it("should return locations list", async () => {
      const locations = [
        {"items":[{"title":"Turm Erlebniscity Oranienburg","id":"here:pds:place:276u33kj-57ad5459769340ce93424f6944a02ce7","resultType":"place","address":{"label":"Turm Erlebniscity Oranienburg, Andre-Pican-Straße 42, 16515 Oranienburg, Germany"},"position":{"lat":52.75006,"lng":13.25762},"access":[{"lat":52.74992,"lng":13.25606}],"distance":38387,"categories":[{"id":"800-8600-0182","name":"Swimming Pool","primary":true},{"id":"550-5510-0206","name":"Recreation Center"},{"id":"550-5520-0357","name":"Water Park"},{"id":"800-8600-0191","name":"Fitness/Health Club"},{"id":"800-8600-0197","name":"Sports Activities"}],"references":[{"supplier":{"id":"core"},"id":"56118101"},{"supplier":{"id":"tripadvisor"},"id":"2304258"},{"supplier":{"id":"yelp"},"id":"qCWM3uSwTeW3sKfznIBcog"}],"highlights":{"title":[{"start":0,"end":1}],"address":{"label":[{"start":0,"end":1}]}}},{"title":"A.T.U Neuruppin","id":"here:pds:place:276u33j4-d197a8c62e3a440fa510a25d4cb818b0","resultType":"place","address":{"label":"A.T.U Neuruppin, An der Holländer Mühle 2, 16816 Neuruppin, Germany"},"position":{"lat":52.91969,"lng":12.78582},"access":[{"lat":52.9198,"lng":12.7861}],"distance":1643,"categories":[{"id":"700-7850-0122","name":"Car Repair","primary":true},{"id":"700-7800-0119","name":"Automobile Dealership - Used Cars"},{"id":"700-7850-0000","name":"Car Repair - Service"},{"id":"700-7850-0123","name":"Auto Parts"},{"id":"700-7850-0125","name":"Tire Repair"}],"chains":[{"id":"5980","name":"A.T.U Die Nr.1 Meisterwerkstatt"}],"references":[{"supplier":{"id":"core"},"id":"1024177286"},{"supplier":{"id":"yelp"},"id":"thclRAweF3FYS6VZLjSVmA"}],"highlights":{"title":[{"start":2,"end":3}],"address":{"label":[{"start":2,"end":3}]}}},{"title":"R.T.M.Gmbh","id":"here:pds:place:276u33j5-fa294bd2f9c24ab5a68dd931cd291844","resultType":"place","address":{"label":"R.T.M.Gmbh, Scholtenstraße 26, 16816 Neuruppin, Germany"},"position":{"lat":52.91857,"lng":12.80197},"access":[{"lat":52.91847,"lng":12.80187}],"distance":2506,"categories":[{"id":"700-7200-0252","name":"Advertising/Marketing, PR & Market Research","primary":true}],"references":[{"supplier":{"id":"yelp"},"id":"vIPz3eIhCpA8S37ZaVXfCQ"}],"highlights":{"title":[{"start":2,"end":3}],"address":{"label":[{"start":2,"end":3}]}}},{"title":"T.R. Giese Augenoptik-Kontaktlinsen Inh. Oliver Weigmann","id":"here:pds:place:276u33j5-1b8335fa6c5c4adeac1828abd9b873ce","resultType":"place","address":{"label":"T.R. Giese Augenoptik-Kontaktlinsen Inh. Oliver Weigmann, Karl-Marx-Straße 86, 16816 Neuruppin, Germany"},"position":{"lat":52.9259,"lng":12.80699},"access":[{"lat":52.92599,"lng":12.80682}],"distance":2457,"categories":[{"id":"800-8000-0161","name":"Optician","primary":true},{"id":"600-6400-0000","name":"Drugstore or Pharmacy"}],"highlights":{"title":[{"start":0,"end":1}],"address":{"label":[{"start":0,"end":1}]}}},{"title":"TT-Line","id":"here:pds:place:276u1xdz-02aad8a0894c4b79b27ba188a2cb5cfa","resultType":"place","address":{"label":"TT-Line, Zum Hafenplatz 1, 23570 Lübeck, Germany"},"position":{"lat":53.94067,"lng":10.85842},"access":[{"lat":53.94066,"lng":10.85842}],"distance":169245,"categories":[{"id":"400-4100-0045","name":"Ferry","primary":true},{"id":"300-3000-0000","name":"Landmark-Attraction"},{"id":"500-5100-0000","name":"Lodging"},{"id":"700-7200-0271","name":"Finance and Insurance"},{"id":"700-7250-0136","name":"Business Facility"},{"id":"700-7400-0000","name":"Consumer Services"}],"references":[{"supplier":{"id":"core"},"id":"1024569381"},{"supplier":{"id":"core"},"id":"801761394"},{"supplier":{"id":"tripadvisor"},"id":"8306936"},{"supplier":{"id":"yelp"},"id":"GBEeOWpOhC4NZBtTp9Fciw"},{"supplier":{"id":"yelp"},"id":"Xh6mEd7YaBJMvqjTIG5drQ"},{"supplier":{"id":"yelp"},"id":"ayTtbiDQ_hR0pnT7lAB1aQ"}],"highlights":{"title":[{"start":0,"end":1}],"address":{"label":[{"start":0,"end":1}]}}}],"queryTerms":[]}
      ];
      axios.get.mockResolvedValueOnce(locations);
      const result = await axios.get('https://autosuggest.search.hereapi.com/v1/autosuggest?at=52.93175,12.77165&limit=5&lang=en&q=t&apiKey=d446XlGmi0TQw4g3g4JvFPZwYR3mFDaLDAez7g_5No4');
      expect(result).toEqual(locations);
    });
  });

  describe("when API call fails", () => {
    it("should return empty locations list", async () => {
        const message = "Network Error";
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(message)),
        );
        await expect(axios.get('')).rejects.toThrow(message);
    });
  });
});