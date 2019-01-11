import axios from 'axios';

jest.mock('axios');


const serverResponseMock = ({ data = {}, status = 200, statusText = 'OK', headers = {}, config = {}, request = {}, error }) => {
  return {
    data,
    status,
    statusText,
    headers,
    config,
    request,
    error
  }
}



describe('Test axios server calls', () => {

  describe('GET', () => {

    context('when server response is 200 OK', () => {

      const arrayData = [{ id: 1 }, { id: 3 }, { id: 3 }];
      const arrayRes = serverResponseMock({ data: arrayData });

      const objData = { id: 1, name: 'custom name' };
      const objRes = serverResponseMock({ data: objData });


      it('should rerturn a array on response', () => {
        axios.get.mockResolvedValue(arrayRes);

        expect.assertions(2);

        return axios.get('/')
          .then(res => {
            expect(res.data).toEqual(arrayData);
            expect(res.status).toBe(200);
          });
      });

      it('should rerturn a object on response', () => {
        axios.get.mockResolvedValue(objRes);

        expect.assertions(2);

        return axios.get('/')
          .then(res => {
            expect(res.data).toEqual(objData);
            expect(res.status).toBe(200);
          })
      });

    });


    context('when server response is an error 404', () => {

      const error1 = new Error('Could not find data');
      const resError1 = serverResponseMock({ status: 404, error: error1 });

      const error2 = new Error('The id param is not informed');
      const resError2 = serverResponseMock({ status: 422, error: error2 });

      it('should return the error 1 related to 404', () => {
        axios.get.mockRejectedValue(resError1);

        expect.assertions(3);

        return axios.get('/')
          .catch(err => {
            expect(err.error).toEqual(error1);
            expect(err.status).toBe(404);

            expect(axios.get).toHaveBeenCalledWith('/');

          });
      });

      it('should return the error 2 related to 422', () => {
        axios.get.mockRejectedValue(resError2);

        expect.assertions(3);

        return axios.get('/users')
          .catch(err => {
            expect(err.error).toEqual(error2);
            expect(err.status).toBe(422);
            expect(axios.get).toHaveBeenCalledWith('/users');
          });
      });

    });

  });
});


