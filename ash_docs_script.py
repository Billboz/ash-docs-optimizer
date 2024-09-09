import requests
import tarfile
import os
from urllib.parse import urlparse

BASE_URL = "https://hex.pm/api/packages?search=ash&sort=recent_downloads"
DOWNLOAD_DIR = os.path.join(os.path.dirname(__file__), "ash_docs")

def get_ash_packages():
    response = requests.get(BASE_URL)
    print(f"API response status code: {response.status_code}")
    return [pkg for pkg in response.json() if pkg['name'].startswith('ash')]

def download_and_extract(url, package_name):
    print(f"Attempting to download: {url}")
    response = requests.get(url)
    print(f"Download response status code: {response.status_code}")
    if response.status_code == 200:
        package_dir = os.path.join(DOWNLOAD_DIR, package_name)
        print(f"Creating directory: {package_dir}")
        os.makedirs(package_dir, exist_ok=True)
        tar_path = os.path.join(package_dir, f"{package_name}.tar.gz")
        
        print(f"Writing file: {tar_path}")
        with open(tar_path, 'wb') as f:
            f.write(response.content)
        
        print(f"Extracting file: {tar_path}")
        with tarfile.open(tar_path, "r:gz") as tar:
            tar.extractall(path=package_dir)
        
        os.remove(tar_path)
        print(f"Downloaded and extracted: {package_name}")
    elif response.status_code == 404:
        print(f"Documentation not found for: {package_name}")
    else:
        print(f"Failed to download: {package_name}. Status code: {response.status_code}")

def main():
    print("Starting script...")
    print(f"Download directory: {DOWNLOAD_DIR}")
    packages = get_ash_packages()
    print(f"Found {len(packages)} Ash-related packages")
    for package in packages:
        print(f"Processing package: {package['name']}")
        if package['releases']:
            version = package['releases'][0]['version']
            download_url = f"https://repo.hex.pm/docs/{package['name']}-{version}.tar.gz"
            download_and_extract(download_url, package['name'])
        else:
            print(f"No releases found for package: {package['name']}")

if __name__ == "__main__":
    main()