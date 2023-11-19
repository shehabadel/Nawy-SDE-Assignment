import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T> {
  constructor(private readonly model: Model<T>) {}

  get _model() {
    return this.model;
  }

  findOne(id: string) {
    return this._model.findOne({ _id: id });
  }


  updateOne({ id, doc }: { id: string | ObjectId; doc: any }) {
    return this._model.findOneAndUpdate(
      { _id: id },
      { $set: doc },
      { new: true },
    );
  }

  createOne(doc:any){
    return this._model.create(doc)
  }

  deleteOne(id:string){
    return this._model.deleteOne({_id:id})
  }

  deleteAll(){
    return this._model.deleteMany({})
  }

  find(query) {
    return this._model.find(query);
  }
}
