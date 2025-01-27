import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Repository } from 'typeorm';

import { User } from '@models/User';

@Resolver(User)
class UserResolver {
  constructor(private readonly userRepository: Repository<User>) {}

  @Query((returns) => User)
  async user(@Arg('id') id: string) {
    const user = await this.userRepository.findBy({ id: +id });
    if (user === undefined) {
      throw new Error(id);
    }
    return user;
  }

  @Query((returns) => [User])
  users(@Args() { skip, take }: RecipesArgs) {
    return this.userRepository.find({ skip, take });
  }

  @Mutation((returns) => Recipe)
  addRecipe(
    @Arg('newRecipeData') newRecipeData: NewRecipeInput,
    @Ctx('user') user: User
  ): Promise<Recipe> {
    return this.recipeService.addNew({ data: newRecipeData, user });
  }

  @Mutation((returns) => Boolean)
  async removeRecipe(@Arg('id') id: string) {
    try {
      await this.recipeService.removeById(id);
      return true;
    } catch {
      return false;
    }
  }
}
