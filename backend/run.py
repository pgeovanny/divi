from app import create_app
import os

app = create_app()

if __name__ == '__main__':
    # Render exige que a porta seja definida pela variável de ambiente PORT
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
