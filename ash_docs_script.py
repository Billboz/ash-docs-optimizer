import requests
import tarfile
import os
from urllib.parse import urlparse

DOWNLOAD_DIR = os.path.join(os.path.dirname(__file__), "ash_docs")

ASH_PACKAGES = [
    "ash",
    "ash_admin",
    "ash_appsignal",
    "ash_archival",
    "ash_authentication",
    "ash_authentication_phoenix",
    "ash_cloak",
    "ash_csv",
    "ash_double_entry",
    "ash_graphql",
    "ash_json_api",
    "ash_money",
    "ash_oban",
    "ash_paper_trail",
    "ash_phoenix",
    "ash_policy_access",
    "ash_policy_authorizer",
    "ash_postgres",
    "ash_slug",
    "ash_sql",
    "ash_sqlite",
    "ash_state_machine",
    "igniter",
    "iterex",
    "reactor",
    "spark"
]

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

def get_latest_version(package_name):
    url = f"https://hex.pm/api/packages/{package_name}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['releases']:
            return data['releases'][0]['version']
    return None

def main():
    print("Starting script...")
    print(f"Download directory: {DOWNLOAD_DIR}")
    print(f"Processing {len(ASH_PACKAGES)} Ash-related packages")
    
    for package in ASH_PACKAGES:
        print(f"Processing package: {package}")
        version = get_latest_version(package)
        if version:
            download_url = f"https://repo.hex.pm/docs/{package}-{version}.tar.gz"
            download_and_extract(download_url, package)
        else:
            print(f"No version found for package: {package}")

if __name__ == "__main__":
    main()