# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.pet import Pet  # noqa: E501
from swagger_server.models.pets import Pets  # noqa: E501
from swagger_server.test import BaseTestCase


class TestPetsController(BaseTestCase):
    """PetsController integration test stubs"""

    def test_create_pets(self):
        """Test case for create_pets

        Create a pet
        """
        response = self.client.open(
            '/v1/pets',
            method='POST')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_list_pets(self):
        """Test case for list_pets

        List all pets
        """
        query_string = [('limit', 56)]
        response = self.client.open(
            '/v1/pets',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_show_pet_by_id(self):
        """Test case for show_pet_by_id

        Info for a specific pet
        """
        response = self.client.open(
            '/v1/pets/{petId}'.format(pet_id='pet_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
