import flask
import os
import make_path_function
from flask_cors import CORS

server = flask.Flask(__name__)
server.root_path = "./"
cors = CORS(server)
server.config['CORS_HEADERS'] = 'Content-Type'

@server.route('/plot', methods=['GET'])
def plot():

    args_dict = flask.request.args
    #print(args_dict)
    #print(args_dict['origin'])
    #print(args_dict['dest'])

    uri = "static/images/" + args_dict['origin'] + "-" + args_dict['dest'] + ".jpeg"
    #uri = flask.url_for('static', filename = args_dict['origin'] + '-' + args_dict['dest'] + '.jpeg')
    if(os.path.isfile(uri) == False):
        if(make_path_function.process_results(args_dict['origin'], args_dict['dest'])):
            uri = "error"

    response = {'uri': uri}
    return flask.jsonify(response)

if __name__ == "__main__":
    server.run(
        host = "0.0.0.0",
        port = os.environ["PORT"],
    )
