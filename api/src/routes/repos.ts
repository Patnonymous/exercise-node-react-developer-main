import { Router, Request, Response } from 'express';
import { Repo } from '../models/Repo';
import axios from 'axios';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

export const repos = Router();

/**
 * @author Silverorange, Anonymous Programmer
 * @description repos GET(/) returns JSON of repository data from an API and local data source. Only returns repos
 * where fork === false.
 */
repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  res.header('Content-Type', 'application/json');
  const reposData: Repo[] = [];

  // Data from API.
  const response = await axios.get(
    'https://api.github.com/users/silverorange/repos'
  );
  response.data.forEach((repo: Repo) => {
    if (repo.fork === false) {
      reposData.push(repo);
    }
  });

  // Data from local folder.
  // "Assume this file can change while the service is running." - Assuming 1. the contents might be updated and 2. the file name
  // may change, we can check the /data/ folder for .json files.
  // The caveat for this is if the data folder had non-repo .json this would error out.
  // Should talk to PM/owner of the API to see what the scope of /api/data/ is.
  const localFiles = await readdir('./data');
  for (const file of localFiles) {
    // Json data only.
    if (path.extname(file) === '.json') {
      const fileData = await readFile(path.join('./data', file));
      const parsedLocalData: Repo[] = JSON.parse(fileData.toString());

      parsedLocalData.forEach((repo: Repo) => {
        if (repo.fork === false) {
          reposData.push(repo);
        }
      });
    }
  }

  res.status(200);
  res.json(reposData);
});
